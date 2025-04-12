import streamlit as st
import requests

API = "http://127.0.0.1:5000/properties"

st.set_page_config(page_title="Property Listing Dashboard", layout="wide")
st.title("🪙 GOLDEN CITY DASHBOARD")

# Tabs for navigation
tab1, tab2, tab3, tab4 = st.tabs(["➕ Add Property", "📋 View Properties", "✏️ Update Property", "🗑️ Delete Property"])

# ---------------------------------------
# ➕ Add Property Tab
# ---------------------------------------
with tab1:
    st.header("Add New Property")

    col1, col2 = st.columns(2)
    with col1:
        name = st.text_input("Property Name")
        location = st.text_input("Location")
    with col2:
        model_url = st.text_input("3D Model URL (GLB)")
        image_url = st.text_input("Image URL")

    if st.button("Add Property"):
        if name and location and model_url and image_url:
            response = requests.post(API, json={
                "name": name,
                "location": location,
                "model_url": model_url,
                "image_url": image_url
            })
            if response.status_code == 201:
                st.success("✅ Property added successfully!")
                st.rerun()
            else:
                st.error(f"❌ Error: {response.text}")
        else:
            st.warning("⚠️ Please fill out all fields.")

# ---------------------------------------
# 📋 View Properties Tab
# ---------------------------------------
with tab2:
    st.header("All Properties")

    if st.button("🔄 Refresh Properties"):
        st.rerun()

    response = requests.get(API)
    if response.status_code == 200:
        properties = response.json()
        if not properties:
            st.info("ℹ️ No properties found.")
        else:
            for prop in properties:
                with st.expander(f"🏘️ {prop['name']} (ID: {prop['id']})", expanded=False):
                    img = prop.get('image_url') or "https://via.placeholder.com/400x300?text=No+Image"
                    st.image(img, caption="📸 Property Image")
                    st.markdown(f"**📍 Location:** {prop['location']}")
                    st.markdown(f"**🔗 3D Model URL:** {prop['model_url']}")
                    st.markdown(f"**🆔 ID:** {prop['id']}")
                    st.markdown("**📦 Full JSON:**")
                    st.code(prop, language='json')
    else:
        st.error("❌ Failed to fetch properties.")

# ---------------------------------------
# ✏️ Update Property Tab
# ---------------------------------------
with tab3:
    st.header("Update a Property")

    update_id = st.number_input("Property ID", min_value=1, step=1)
    col1, col2 = st.columns(2)
    with col1:
        new_name = st.text_input("New Name")
        new_location = st.text_input("New Location")
    with col2:
        new_model_url = st.text_input("New 3D Model URL")
        new_image_url = st.text_input("New Image URL")

    if st.button("Update Property"):
        if new_name and new_location and new_model_url and new_image_url:
            response = requests.put(f"{API}/{int(update_id)}", json={
                "name": new_name,
                "location": new_location,
                "model_url": new_model_url,
                "image_url": new_image_url
            })
            if response.status_code == 200:
                st.success("✅ Property updated successfully!")
                st.rerun()
            else:
                st.error(f"❌ Error: {response.text}")
        else:
            st.warning("⚠️ Please fill out all fields.")

# ---------------------------------------
# 🗑️ Delete Property Tab
# ---------------------------------------
with tab4:
    st.header("Delete a Property")
    delete_id = st.number_input("Property ID to Delete", min_value=1, step=1, key="delete")

    if st.button("Delete Property"):
        response = requests.delete(f"{API}/{int(delete_id)}")
        if response.status_code == 200:
            st.success("✅ Property deleted successfully!")
            st.rerun()
        else:
            st.error(f"❌ Error: {response.text}")
