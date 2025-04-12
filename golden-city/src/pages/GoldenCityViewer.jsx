import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Model = () => {
  const { scene } = useGLTF('/HOUSEVILLAGEASSETPACK.glb');
  return <primitive object={scene} />;
  
};


const Loader = () => (
  <Html center>
    <div style={{ color: 'white' }}>Loading model...</div>
  </Html>
);

const GoldenCityViewer = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
    <section className="relative">
    <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-2">Modern Luxury Villa</h1>
        <h4 className="text-3m  text-white mb-2">New Delhi, India</h4>
        
    <div id="3d-container"
      style={{
        width: '100%',
        height: '70vh',
        backgroundColor: '#1e293b00',
      }}
    >
      
      <Canvas camera={{ position: [10, 5, 10], fov: 75 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
        <OrbitControls
          enableDamping
          dampingFactor={0.25}
          minDistance={5}
          maxDistance={50}
          maxPolarAngle={Math.PI * 0.9}
        />
      </Canvas>
    </div>
    <div
          className="close-btn absolute top-5 right-5 w-10 h-10 rounded-full bg-white-800/70 backdrop-blur flex items-center justify-center cursor-pointer z-10 transition hover:bg-amber-400/20 hover:scale-110"
          onClick={() => window.history.back()}
        >
          <i className="fas fa-times text-white text-lg"></i>
        </div>

        
    

      {/* Property Info Section */}
      

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: 'fa-bed', label: '6 Bedrooms' },
            { icon: 'fa-bath', label: '5.5 Bathrooms' },
            { icon: 'fa-vector-square', label: '5,800 sqft' },
          ].map(({ icon, label }, i) => (
            <div
              key={i}
              className="glass-card p-4 rounded-xl text-center bg-slate-700/70 backdrop-blur border border-white/10"
            >
              <div className="text-amber-400 mb-1">
                <i className={`fas ${icon} text-xl`}></i>
              </div>
              <div className="text-white font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="glass-card p-6 rounded-xl mb-8 bg-slate-700/70 backdrop-blur border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Property Description</h3>
          <p className="text-gray-300">
            This stunning contemporary villa offers breathtaking ocean views from its cliffside position in Malibu. 
            The property features floor-to-ceiling glass walls, a gourmet kitchen with premium appliances, 
            a luxurious master suite with spa-like bathroom, and an infinity pool overlooking the Pacific Ocean.
            The modern architecture blends seamlessly with the natural surroundings.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="btn-teal text-white px-6 py-4 rounded-xl text-lg font-medium flex items-center justify-center"
            onClick={() =>
              alert(
                'AR viewing would be enabled on mobile devices with WebXR support. This is a placeholder for the demo.'
              )
            }
          >
            <i className="fas fa-cube mr-3"></i> View in AR
          </button>
          <button
            className="btn-gold text-white px-6 py-4 rounded-xl text-lg font-medium flex items-center justify-center"
            onClick={() =>
              alert(
                'This would open a contact form or property details sheet in a real application.'
              )
            }
          >
            <i className="fas fa-file-signature mr-3"></i> Request Details
          </button>
        </div>
      </div>

    
    </section>
    </div>
  );
};

export default GoldenCityViewer;
