from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# SQLite config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///properties.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Property Model
class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(120), nullable=False)
    model_url = db.Column(db.String(500), nullable=False)
    image_url = db.Column(db.String(500), nullable=False)  # New field

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "location": self.location,
            "model_url": self.model_url,
            "image_url": self.image_url
        }

# Create Property
@app.route('/properties', methods=['POST'])
def create_property():
    data = request.json

    # Validate required fields
    required_fields = ['name', 'location', 'model_url', 'image_url']
    for field in required_fields:
        if not data.get(field):
            return jsonify({"error": f"'{field}' is required"}), 400

    new_property = Property(
        name=data['name'],
        location=data['location'],
        model_url=data['model_url'],
        image_url=data['image_url']
    )
    db.session.add(new_property)
    db.session.commit()
    return jsonify(new_property.to_dict()), 201

# Get All Properties
@app.route('/properties', methods=['GET'])
def get_all_properties():
    properties = Property.query.all()
    return jsonify([p.to_dict() for p in properties]), 200

# Get One Property
@app.route('/properties/<int:property_id>', methods=['GET'])
def get_property(property_id):
    property_obj = Property.query.get(property_id)
    if not property_obj:
        return jsonify({"error": "Property not found"}), 404
    return jsonify(property_obj.to_dict()), 200

# Update Property
@app.route('/properties/<int:property_id>', methods=['PUT'])
def update_property(property_id):
    property_obj = Property.query.get(property_id)
    if not property_obj:
        return jsonify({"error": "Property not found"}), 404

    data = request.json
    property_obj.name = data.get('name', property_obj.name)
    property_obj.location = data.get('location', property_obj.location)
    property_obj.model_url = data.get('model_url', property_obj.model_url)
    property_obj.image_url = data.get('image_url', property_obj.image_url)

    db.session.commit()
    return jsonify(property_obj.to_dict()), 200

# Delete Property
@app.route('/properties/<int:property_id>', methods=['DELETE'])
def delete_property(property_id):
    property_obj = Property.query.get(property_id)
    if not property_obj:
        return jsonify({"error": "Property not found"}), 404

    db.session.delete(property_obj)
    db.session.commit()
    return jsonify({"message": "Property deleted"}), 200

if __name__ == '__main__':
    # with app.app_context():
    #     db.create_all()

    app.run(debug=True)
