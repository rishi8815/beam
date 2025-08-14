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
    <div className=" w-full h-[72%] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/cfaaf0cb-6a8c-4bc6-89d5-0652c8e4b039/phone-call-finance-businessman-with-laptop-networking-connection-branding-company-with-mockup-space-banner-planning-employee-with-pc-advertising-financial-accounting-agency+%2814%29.jpg')",
        }}
      />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between p-6 mt-2 ">
          <div className="flex items-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/12b6a507-7fe0-41fe-9a0c-3c64fb191477/logo_beam+%284%29.png?format=1500w"
              alt="Beam Logo"
              className="h-10 "
            />
          </div>
          <div className="text-gray-800 font-medium text-sm lg:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>beamwallet.com</div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 px-6 lg:px-12 pt-12 lg:pt-20">
          <div>
            <h1 className="font-black text-4xl lg:text-6xl leading-tight tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
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
      <div className='h-screen w-full bg-white mt-[10%] '>
        <div className="flex flex-col lg:flex-row items-center justify-center h-full px-6 lg:px-20 gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 space-y-8 max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Create your own business. <br />
                Earn with <span className="text-pink-500">Beam Wallet</span> expansion.
              </h1>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  This business plan is simple, affordable and realistic. Build a network of stores that generates
                  attractive commissions, capable of generating revenue of{" "}
                  <span className="text-pink-500 font-semibold">€387,607 in just 2 years</span> — all without having to
                  open a store, buy franchises or make large investments.
                </p>

                <p>We only ask for dedication and seriousness — the rest is ready for you.</p>

                <p className="flex items-center gap-2">
                  <span className="text-2xl">🏪</span>
                  Join <span className="text-pink-500 font-semibold">Beam Wallet's</span> international expansion and
                  turn your network into a profitable and scalable business.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-pink-500 font-medium">Read more (click to see full PDF):</p>

              <div className="flex gap-4 text-pink-500 font-medium">
                <a href="#" className="hover:underline">
                  English
                </a>
                <span className="text-gray-400">•</span>
                <a href="#" className="hover:underline">
                  Spanish
                </a>
              </div>

              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors">
                SECURE YOUR LICENSE
              </button>
            </div>
          </div>

          {/* Right Side - Phone Image */}
          <div className=" pt-10  flex-1 flex justify-center lg:justify-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/e273fa2b-030d-49e0-9694-c9c4f99fbaf6/mockup-2+%283%29.png?format=1000w"
              alt="Beam Wallet App on Phone"
              className="max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>

            {/* Third Section - Partner Showcase */}
      <div className='h-screen w-full bg-white px-5 mt-[10%]'>
        <div className="flex h-full">
          {/* Left Side - Image Grid (50%) */}
          <div className="w-1/2 h-full p-4">
            <div className="grid grid-cols-2 gap-4 h-full">
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
                  src=' https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/313c117f-fd89-4027-bd5f-e7472a3605e5/AdobeStock_288240229.jpeg'
                  alt="Baristas"
                  className="w-full h-full object-cover"
                /> 
              </div>
                
              {/* Bottom Left Image Box */}
              <div className="bg-gray-200  overflow-hidden flex items-center justify-center">
              <img
                  src=' https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/313c117f-fd89-4027-bd5f-e7472a3605e5/AdobeStock_288240229.jpeg'
                  alt="Baristas"
                  className="w-full h-full object-cover"
                /> 
              </div>
                
              {/* Bottom Right Image Box */}
              <div className="bg-gray-200  overflow-hidden flex items-center justify-center">
              <img
                  src=' https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/313c117f-fd89-4027-bd5f-e7472a3605e5/AdobeStock_288240229.jpeg'
                  alt="Baristas"
                  className="w-full h-full object-cover"
                /> 
              </div>
            </div>
          </div>

          {/* Right Side - Text Content (50%) */}
          <div className="w-1/2 h-full flex items-center justify-center  ">
            <div className="space-y-8 max-w-lg">
              <div className="space-y-6  pb-4">
                <h1 className="text-4xl   font-bold text-gray-900 leading-tight">
                  Become a <span className="text-pink-500">Beam</span> partner and start earning with every installation
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                  Create your network without limits!
                </h2>

                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
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

              <div className="space-y-4">
                <p className="text-pink-500 font-medium">Read more (click to see full PDF in your language):</p>

                <div className="flex gap-4 text-pink-500 font-medium">
                  <a href="#" className="hover:underline">
                    English
                  </a>
                  <span className="text-gray-400">•</span>
                  <a href="#" className="hover:underline">
                    Spanish
                  </a>
                </div>

                <button className="bg-black text-white mt-20   px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors">
                  SECURE YOUR LICENSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section - Successful Cases */}
      <div className='h-screen w-full bg-zinc-50 mt-[10%]'>
        <div className="h-full flex flex-col items-center justify-center px-6 lg:px-20">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Successful Cases
            </h2>
          </div>

          {/* Cards Container */}
          <div className=" w-full ">
            <div 
              ref={scrollContainerRef}
              className="flex justify-between gap-10  pb-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' }
              }}
            >
              {/* Enoc Card */}
              <div className="flex-shrink-0 gap-2 w-100 bg-white p-8">
                <div className="text-center space-y-6">
                  {/* Logo Placeholder */}
                  <div className="w-20 h-20  rounded-full mx-auto flex items-center justify-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/9c59211c-25f1-48f9-97d5-8f08f8ee572b/enoc-products+%281%29.jpg" alt="" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">Eno</h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Integrated with Pump Browsers: 'Pay from the comfort of your seat'; Integrated with over 130 fuel pumps.
                  </p>
                  
                  <button className="bg-black text-white px-6 py-4 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors">
                    SEE VIDEO
                  </button>
                </div>
              </div>

              {/* Carrefour Card */}
              <div className="flex-shrink-0 w-100 bg-white p-8">
                <div className="text-center space-y-6">
                  {/* Logo Placeholder */}
                  <div className="w-20 h-20  rounded-full mx-auto flex items-center justify-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/9c59211c-25f1-48f9-97d5-8f08f8ee572b/enoc-products+%281%29.jpg" alt="" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">CarreFour</h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    25 hypermarkets and 20 supermarkets in the United Arab Emirates. Beam customers spend 10% more than the average of other customers.
                  </p>
                  
                  <button className="bg-black text-white px-6 py-4 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors">
                    SEE VIDEO
                  </button>
                </div>
              </div>

              {/* Costa Coffee Card */}
              <div className="flex-shrink-0 w-100 bg-white p-8">
                <div className="text-center space-y-6">
                  {/* Logo Placeholder */}
                  <div className="w-20 h-20  rounded-full mx-auto flex items-center justify-center">
                    <img src="https://images.squarespace-cdn.com/content/v1/6827178ec9afb270a9f1de18/9c59211c-25f1-48f9-97d5-8f08f8ee572b/enoc-products+%281%29.jpg" alt="" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Costa Coffee</h3>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Strategic shift to Beam: 80% of customers are retained. The Frostino iced coffee launch campaign achieved 4 times more results than any other sales channel.
                  </p>
                  
                  <button className="bg-black text-white px-6 py-4 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors">
                    SEE VIDEO
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12 justify-center">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <span className="text-gray-600 text-xl">←</span>
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <span className="text-gray-600 text-xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Section - Real Examples */}
      <div className='h-screen w-full bg-white mt-[15%]'>
        <div className="h-full flex flex-col items-center justify-center px-6 lg:px-20">
          {/* Section Title and Description */}
          <div className="text-center mb-16 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Real examples. Real results. The Beam network keeps growing...
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Discover how Beam Wallet is present in cafes, gas stations, supermarkets and more — from Dubai to Lisbon, from small shops to big brands.
              </p>
              <p>
                Each installation is a new step in the growth of our network. And you could be the next to be a part of it.
              </p>
            </div>

            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors mt-8">
              SECURE YOUR LICENCE
            </button>
          </div>

          {/* Video Thumbnails */}
          <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
            {/* Left Video - Costa Coffee */}
            <div className="flex-1">
              <div className="bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="aspect-video bg-gray-300 relative">
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How to use Beam in Costa Coffee
                  </h3>
                  <p className="text-sm text-gray-600">
                    TAP YOUR PHONE ON THE BEAM TERMINAL
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Video - Beam Wallet International */}
            <div className="flex-1 h-10">
              <div className="bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="aspect-video bg-gray-300 relative">
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                  </div>
                  {/* YouTube and Copy Link Icons */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-red-500 text-xs">YT</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-gray-600 text-xs">🔗</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Beam Wallet Internacional
                  </h3>
                  <p className="text-sm text-gray-600">
                    Select your pump number
                  </p>
                </div>
              </div>
            </div>

            {/* Right Video - In a Perfect World */}
            <div className="flex-1">
              <div className="bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="aspect-video bg-gray-300 relative">
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    In a Perfect World
                  </h3>
                  <p className="text-sm text-gray-600">
                    Retail experience with Beam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
        
    </div>
   
    
  )
}
