export default function CartDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf8f5] text-[#2c2416] p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-l border-[#e8dfcf] animate-in slide-in-from-right duration-300">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#e8dfcf]">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-[#2c2416]">Your Cart</h3>
                <span className="text-xs bg-[#ff443a] text-white px-2 py-0.5 rounded-full font-bold">
                  1
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close Cart"
                className="w-8 h-8 rounded-full border border-[#e8dfcf] flex items-center justify-center text-[#5c4929] hover:text-[#2c2416] hover:bg-[#f2ece2] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div className="py-6 space-y-4">
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-[#e8dfcf] shadow-xs">
                <img
                  src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a60d337ca2a72067961519c_rgmob-3.avif"
                  alt="Redgevity Master System Reservation"
                  className="w-20 h-20 rounded-xl object-cover border border-[#f0f0f0]"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-[#2c2416]">
                      Redgevity Master — Commercial Allocation
                    </h4>
                  </div>
                  <p className="text-xs text-[#808080] mt-0.5">
                    Includes Tablet UX + IoT Tier
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-[#5c4929]">Qty: 1</span>
                    <span className="text-sm font-bold text-[#2c2416]">24.999€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Note */}
            <div className="p-4 rounded-2xl bg-[#f2ece2] border border-[#e8dfcf] text-xs text-[#5c4929] leading-relaxed">
              Commercial setup includes turnkey on-site installation, staff onboarding, software suite, and 12-month hardware warranty.
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="pt-6 border-t border-[#e8dfcf] space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-[#808080]">Subtotal (net)</span>
              <span className="font-bold text-[#2c2416]">24.999€</span>
            </div>
            <div className="flex justify-between text-xs text-[#808080]">
              <span>Monthly IoT connectivity</span>
              <span>49€ / month</span>
            </div>

            <button
              onClick={() => alert('Proceeding to consultation & commercial checkout checkout')}
              className="w-full rgm-btn rgm-btn-dark py-3.5 text-sm font-semibold shadow-lg cursor-pointer group"
            >
              <span className="rgm-btn__bg" />
              <span className="relative z-10">Proceed to Consultation / Order</span>
            </button>
            <p className="text-[10px] text-center text-[#808080]">
              Secure European B2B Checkout & Leasing Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
