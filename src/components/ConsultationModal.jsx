import { useState } from 'react';

export default function ConsultationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'Longevity Clinic',
    city: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#faf8f5] text-[#2c2416] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#e8dfcf] z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f2ece2] hover:bg-[#e8dfcf] flex items-center justify-center text-[#5c4929] transition-colors cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-[#ff443a] tracking-wider bg-[#ff443a]/10 px-3 py-1 rounded-full inline-block mb-2">
                Commercial Inquiry
              </span>
              <h3 className="text-2xl font-bold text-[#2c2416]">
                Book a 15-Min Partner Call
              </h3>
              <p className="text-xs sm:text-sm text-[#5c4929] mt-1 font-light">
                Discuss space readiness, receive our tailored offer and an ROI snapshot for your location.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2c2416] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Thomas Weber"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e8dfcf] text-sm text-[#2c2416] focus:outline-none focus:border-[#2c2416]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2c2416] mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e8dfcf] text-sm text-[#2c2416] focus:outline-none focus:border-[#2c2416]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2c2416] mb-1">
                    Facility Type
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#e8dfcf] text-xs text-[#2c2416] focus:outline-none focus:border-[#2c2416]"
                  >
                    <option>Longevity Clinic</option>
                    <option>Medical / Integrative Practice</option>
                    <option>Luxury Hotel & Spa</option>
                    <option>Performance & Fitness Space</option>
                    <option>Corporate Wellness</option>
                    <option>Other Facility</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2c2416] mb-1">
                    Location / City
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zurich / London"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#e8dfcf] text-sm text-[#2c2416] focus:outline-none focus:border-[#2c2416]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2c2416] mb-1">
                  Optional Notes / Timeline
                </label>
                <textarea
                  rows={2}
                  placeholder="Target launch date, number of rooms, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-white border border-[#e8dfcf] text-xs text-[#2c2416] focus:outline-none focus:border-[#2c2416]"
                />
              </div>

              <button
                type="submit"
                className="w-full rgm-btn rgm-btn-dark py-3 text-sm font-semibold shadow-xl cursor-pointer group mt-2"
              >
                <span className="rgm-btn__bg" />
                <span className="relative z-10">Submit Request & Schedule Call</span>
              </button>

              <p className="text-[11px] text-center text-[#808080]">
                Direct connection with Luminous Labs commercial team · No obligation
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#22c55e]/15 text-[#22c55e] text-2xl flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-[#2c2416]">
              Request Received!
            </h3>
            <p className="text-sm text-[#5c4929] max-w-xs mx-auto">
              Thank you, {formData.name}. Our commercial lead will reach out to <strong>{formData.email}</strong> with your preliminary ROI model.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#2c2416] text-white text-xs font-semibold cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
