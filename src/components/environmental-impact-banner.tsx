export function EnvironmentalImpactBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-b-4 border-orange-300 shadow-md relative z-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center">
          <div className="p-8 bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-2xl border-4 border-orange-400 max-w-6xl mx-auto shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-orange-200 rounded-full p-2 mr-3">
                <span className="text-2xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold text-orange-800">Digital Pollution Alert!</h2>
            </div>
            <p className="text-xl text-gray-800 mb-4 leading-relaxed">
              📧 <strong>Your emails are stored in servers 24hrs</strong> → ⚡ <strong>Servers need electricity</strong> → 🏭 <strong>Electricity needs fuels</strong> → 💨 <strong>Fuels release CO₂</strong>
            </p>
            <p className="text-2xl text-orange-700 font-bold bg-orange-50 py-3 px-6 rounded-lg border-2 border-orange-300">
              Your Emails = CO₂ Emissions + Electricity Waste
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}