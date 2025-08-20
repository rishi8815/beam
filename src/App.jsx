import { useEffect, useState, useRef } from 'react'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto:wght@400;500;700;900&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  return (
    
    <div className="w-full h-screen">
    <div className=" w-full h-[70%] md:h-[85%] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/cfaaf0cb-6a8c-4bc6-89d5-0652c8e4b039/phone-call-finance-businessman-with-laptop-networking-connection-branding-company-with-mockup-space-banner-planning-employee-with-pc-advertising-financial-accounting-agency+%2814%29.jpg')",
        }}
      />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between p-4 md:p-6 mt-2">
          <div className="flex items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/12b6a507-7fe0-41fe-9a0c-3c64fb191477/logo_beam+%284%29.png?format=1500w"
              alt="Beam Logo"
              className="h-8 md:h-10"
            />
          </div>
          <div className=" p-4  rounded-full  bg-zinc-200">
            <h1 className="text-gray-800 font-medium text-xs md:text-sm lg:text-base" style={{ fontFamily: 'Inter, sans-serif' }} >beamwallet.com</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 px-4 md:px-6 lg:px-12 mt-8 md:mt-12 lg:pt-20">
          <div>
            <h1 className="font-black text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-gray-800">Create Your Own Job and Earn</span>
              <br />
              <span className="text-pink-500">€15.000/month</span>
              <span className="text-gray-800"> with </span>
              <span className="text-pink-500">Beam Wallet</span>
              <span className="text-gray-800">..</span>
            </h1>
          </div>
        </main>
      </div>

      {/* Second Section - Mobile App Showcase */}
      <div className='h-screen w-full pb-[12%] bg-white md:mt-[10%]'>
        <div className="flex flex-col lg:flex-row items-center justify-center h-full px-4 md:px-6 lg:px-20 gap-8 md:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-6 md:space-y-8 max-w-2xl">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Create your own business. <br />
                Earn with <span className="text-pink-500">Beam Wallet</span> expansion.
              </h1>

              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  This business plan is simple, affordable and realistic. Build a network of stores that generates
                  attractive commissions, capable of generating revenue of{" "}
                  <span className="text-pink-500 font-semibold">€387,607 in just 2 years</span> — all without having to
                  open a store, buy franchises or make large investments.
                </p>

                <p>We only ask for dedication and seriousness — the rest is ready for you.</p>

                <p className="flex items-center gap-2">
                  <span className="text-xl md:text-2xl">🏪</span>
                  Join <span className="text-pink-500 font-semibold">Beam Wallet's</span> international expansion and
                  turn your network into a profitable and scalable business.
                </p>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <p className="text-pink-500 font-medium text-sm md:text-base">Read more (click to see full PDF):</p>

              <div className="flex gap-4 text-pink-500 font-medium text-sm md:text-base">
                <a href="#" className="hover:underline">
                  English
                </a>
                <span className="text-gray-400">•</span>
                <a href="#" className="hover:underline">
                  Spanish
                </a>
              </div>

              <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-800 transition-colors">
                SECURE YOUR LICENSE
              </button>
            </div>
          </div>

          {/* Right Side - Phone Image */}
          <div className="pt-6 md:pt-10 flex-1 flex justify-center lg:justify-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/e273fa2b-030d-49e0-9694-c9c4f99fbaf6/mockup-2+%283%29.png?format=1000w"
              alt="Beam Wallet App on Phone"
              className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>

            {/* Third Section - Partner Showcase */}
      <div className='h-screen w-full bg-white px-4 md:px-5 mt-[10%]'>
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side - Image Grid (50%) */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
            <div className="grid grid-cols-2 gap-2 md:gap-4 h-full">
              {/* Top Left Image Box */}
              <div className="bg-gray-200 rounded-none overflow-hidden">
                <img
                  src=' https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/313c117f-fd89-4027-bd5f-e7472a3605e5/AdobeStock_288240229.jpeg'
                  alt="Baristas"
                  className="w-full h-full object-cover"
                />              
              </div>
                
              {/* Top Right Image Box */}
              <div className="bg-gray-200  overflow-hidden flex items-center justify-center">
              <img
                  src=' https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/cb8f6c0e-1291-4af2-841f-fa41a569a9a1/Novo+Projeto+%2839%29+%283%29.jpg'
                  alt="Baristas"
                  className="w-full h-full object-cover"
                /> 
              </div>
                
              {/* Bottom Left Image Box */}
              <div className="bg-gray-200  overflow-hidden flex items-center justify-center">
              <img
                  src=' https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/dbeb38f9-778b-4930-9c2e-2cb52cb11509/Novo+Projeto+%2840%29.jpg'
                  alt="Baristas"
                  className="w-full h-full object-cover"
                /> 
              </div>
                
              {/* Bottom Right Image Box */}
              <div className="bg-gray-200  overflow-hidden flex items-center justify-center">
              <img
                  src='https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/22c143c9-de3d-4bbd-ac56-53c6f643a26c/beam-beacon-overthecounter_kpm8.1920+%283%29.jpg'
                  alt="Baristas"
                  className="w-full h-full object-cover"
                /> 
              </div>
            </div>
          </div>

          {/* Right Side - Text Content (50%) */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-4 md:p-8">
            <div className="space-y-6 md:space-y-8 max-w-lg">
              <div className="space-y-4 md:space-y-6 pb-4">
                <h1 style={{fontFamily:'Space Grotesk'}} className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Become a <span className="text-pink-500">Beam</span> partner and start earning with every installation
                </h1>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                  Create your network without limits!
                </h2>

                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Help merchants accept <span className="text-pink-500 font-semibold">Beam Wallet</span> to earn attractive 
                    commissions per installation and recurring monthly rent per active store.
                  </p>

                  <p>
                    We only ask for initiative and dedication — profits grow with your network. A scalable, 
                    flexible business model with real impact.
                  </p>

                  <p>
                    Start today and transform your network into financial freedom.
                  </p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-pink-500 font-medium text-sm md:text-base">Read more (click to see full PDF in your language):</p>

                <div className="flex gap-4 text-pink-500 font-medium text-sm md:text-base">
                  <a href="#" className="hover:underline">
                    English
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="#" className="hover:underline">
                    Spanish
                  </a>
                </div>

                <button className="bg-black text-white mt-8 md:mt-20 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-800 transition-colors">
                  SECURE YOUR LICENSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section - Successful Cases */}
      <div className='h-screen w-full bg-zinc-50 mt-[10%]'>
        <div className="h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-20">
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Successful Cases
            </h2>
          </div>

          {/* Cards Container */}
          <div className="w-full">
            <div 
              ref={scrollContainerRef}
              className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 pb-4 overflow-x-auto"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
            >
              {/* Enoc Card */}
              <div className="flex-shrink-0 w-full md:w-80 bg-white p-6 md:p-8">
                <div className="text-center space-y-4 md:space-y-6">
                  {/* Logo Placeholder */}
                  <div className="w-16 md:w-20 h-16 md:h-20 rounded-full mx-auto flex items-center justify-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/9c59211c-25f1-48f9-97d5-8f08f8ee572b/enoc-products+%281%29.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Eno</h3>
                  
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Integrated with Pump Browsers: 'Pay from the comfort of your seat'; Integrated with over 130 fuel pumps.
                  </p>
                  
                  <button className="bg-black text-white px-4 md:px-6 py-3 md:py-4 rounded-full font-semibold text-xs md:text-sm hover:bg-gray-800 transition-colors">
                    SEE VIDEO
                  </button>
                </div>
              </div>

              {/* Carrefour Card */}
              <div className="flex-shrink-0 w-full md:w-80 bg-white p-6 md:p-8">
                <div className="text-center space-y-4 md:space-y-6">
                  {/* Logo Placeholder */}
                  <div className="w-16 md:w-20 h-16 md:h-20 rounded-full mx-auto flex items-center justify-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/9c59211c-25f1-48f9-97d5-8f08f8ee572b/enoc-products+%281%29.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">CarreFour</h3>
                  
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    25 hypermarkets and 20 supermarkets in the United Arab Emirates. Beam customers spend 10% more than the average of other customers.
                  </p>
                  
                  <button className="bg-black text-white px-4 md:px-6 py-3 md:py-4 rounded-full font-semibold text-xs md:text-sm hover:bg-gray-800 transition-colors">
                    SEE VIDEO
                  </button>
                </div>
              </div>

              {/* Costa Coffee Card */}
              <div className="flex-shrink-0 w-full md:w-80 bg-white p-6 md:p-8">
                <div className="text-center space-y-4 md:space-y-6">
                  {/* Logo Placeholder */}
                  <div className="w-16 md:w-20 h-16 md:h-20 rounded-full mx-auto flex items-center justify-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/9c59211c-25f1-48f9-97d5-8f08f8ee572b/enoc-products+%281%29.jpg" alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Costa Coffee</h3>
                  
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Strategic shift to Beam: 80% of customers are retained. The Frostino iced coffee launch campaign achieved 4 times more results than any other sales channel.
                  </p>
                  
                  <button className="bg-black text-white px-4 md:px-6 py-3 md:py-4 rounded-full font-semibold text-xs md:text-sm hover:bg-gray-800 transition-colors">
                    SEE VIDEO
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 md:mt-12 justify-center">
              <button 
                onClick={scrollLeft}
                className="w-10 md:w-12 h-10 md:h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <span className="text-gray-600 text-lg md:text-xl">←</span>
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 md:w-12 h-10 md:h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <span className="text-gray-600 text-lg md:text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section - Real Examples */}
      <div className='h-screen w-full bg-white mt-[15%]'>
        <div className="h-full flex flex-col items-center justify-center px-4 md:px-6 lg:px-20">
          {/* Section Title and Description */}
          <div className="text-center mb-8 md:mb-16 max-w-4xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
              Real examples. Real results. The Beam network keeps growing...
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Discover how Beam Wallet is present in cafes, gas stations, supermarkets and more — from Dubai to Lisbon, from small shops to big brands.
              </p>
              <p>
                Each installation is a new step in the growth of our network. And you could be the next to be a part of it.
              </p>
            </div>

            <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gray-800 transition-colors mt-6 md:mt-8">
              SECURE YOUR LICENCE
            </button>
          </div>

          {/* Video Thumbnails */}
          <div className="flex flex-col lg:flex-row lg:gap-2 md:gap-8 w-full ">
            {/* Left Video - Costa Coffee */}
            <div className="flex-1 pt-10">
              <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/KFxG_bli-i4"
        title="How to use Beam in Costa Coffee"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
            </div>

            {/* Middle Video - Beam Wallet International */}
            <div className="flex-1">
             <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/jG5sZeJARXk"
        title="Beam Wallet Internacional"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
            </div>

            {/* Right Video - In a Perfect World */}
            <div className="flex-1 pt-10">
             <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/VgL3AMmfAgg"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className= " flex flex-row w-full h-[99.9%] bg-teal-800 text-white py-10 md:py-16 px-4 md:px-8 lg:px-16  ">
       <div className='w-1/2 flex flex-row justify-center items-center'> 
       <div className=' gap-2  h-full mr-8 flex flex-col justify-center'>
       <div className=''><img
              src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/12b6a507-7fe0-41fe-9a0c-3c64fb191477/logo_beam+%284%29.png?format=1500w"
              alt="Beam Logo"
              className="h-20"
            /></div>
                          <div className="flex space-x-3">
                {['instagram', 'x', 'facebook', 'linkedin', 'youtube', 'medium', 'tiktok', 'pinterest'].map((platform) => (
                  <div key={platform} className="w-8 h-8 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-teal-800 transition-colors cursor-pointer">
                    <span className="text-xs font-bold">{platform === 'x' ? 'X' : platform.charAt(0).toUpperCase()}</span>
                  </div>
                ))}
              </div>
             <div className=' w-full pr-[40%]'>
             <p className="text-sm  text-left leading-relaxed text-gray-200">
                BEAM is a marketing platform and digital wallet that processes electronic payments. It operates from smartphones of Consumers/Users who download this application, giving them immediate benefits with every purchase.
              </p>
             </div>
            
       </div>
       <div className=' flex flex-col justify-center items-center gap-10'>
       <p className='text-2xl underline'>www.beamwallet.com</p>
       <div className="flex flex-row items-center justify-center gap-4">
              
                {/* DMCA Protected Badge */}
                <div className="">
                  <img className='h-20' src="https://images.dmca.com/Badges/_dmca_premi_badge_1.png" alt="vdn" />
                </div>
                
                <img src="https://images.dmca.com/Badges/_dmca_premi_badge_1.png" alt="" />
                {/* PCI DSS Compliant Badge */}
                
                  <img src="https://my-pci.usd.de/compliance/2909-2A2C-E055-8FEA-A952-A7AC/seal.png" alt="" />
                
                  <img className='h-26' src="https://www.thinkers360.com/tl/assets/images/badges/top50/Top%2050%20-%20CRM.png" alt="" />
              </div>
            
      
       </div>
        </div>   
       
       <div className=' w-1/2  h-full pl-[30%] pt-[5%] '>
       <p className='text-2xl font-semibold  mb-2'>Download Beam</p>
       <div className='gap-3 flex flex-col'>
       
       <img  className='w-40'src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/52d7cdd5-a1f6-4863-a13e-2b93ca2fdf70/logo_app_store_footer-BuhSmkWE.png" alt="" />
        <img className='w-40' src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/c2271d8a-e29a-411d-8abe-fb62906b9dd7/transferir+%282%29.png" alt="" />
       </div>
       </div>

      </div>
      
   
        
    </div>
   
    
  )
}
