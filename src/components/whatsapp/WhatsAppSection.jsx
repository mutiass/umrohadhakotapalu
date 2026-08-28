import React from "react";

const WhatsAppAgent = () => {
  const phoneNumber = "6285710389064";

  const message =
    "Assalamu 'alaikum kak, mau tanya-tanya tentang umroh start kota Palu";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="whatsapp-agent">
      <div className="whatsapp-agent-glow glow-one"></div>
      <div className="whatsapp-agent-glow glow-two"></div>

      <div className="whatsapp-agent-container">
        <div className="whatsapp-agent-content">
          <span className="whatsapp-agent-label">
            AGEN RESMI UMROH
          </span>

          <h2>
            Punya Pertanyaan
            <span> Tentang Umroh?</span>
          </h2>

          <p>
            Silakan hubungi agen resmi kami melalui WhatsApp.
            Tim kami siap membantu menjawab pertanyaan Anda
            seputar program umroh start kota Palu.
          </p>

          <div className="whatsapp-agent-button-wrapper">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-agent-button"
            >
              <span className="whatsapp-icon">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M16.01 3C8.83 3 3 8.82 3 16c0 2.3.6 4.55 1.73 6.54L3 29l6.62-1.69A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.19 3 16.01 3Zm0 23.65c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.93 1 1.05-3.83-.27-.42A10.6 10.6 0 1 1 16.01 26.65Zm5.82-7.94c-.32-.16-1.91-.94-2.21-1.04-.3-.11-.52-.16-.74.16-.22.32-.85 1.04-1.04 1.25-.19.22-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.6-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.77-1.01-2.43-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.91-.78 2.18-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.62-.38Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span className="whatsapp-button-text">
                <strong>Chat dengan Agen Resmi</strong>
                <strong>Hubungi via WhatsApp</strong>
              </span>

              <span className="whatsapp-arrow">→</span>
            </a>
          </div>

          <div className="whatsapp-agent-number">
            <span className="status-dot"></span>
            <span>WhatsApp Agen Resmi</span>
            <strong>0857 1038 9064</strong>
          </div>
        </div>

        <div className="whatsapp-agent-visual">
          <div className="visual-ring ring-one"></div>
          <div className="visual-ring ring-two"></div>

          <div className="whatsapp-logo-circle">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M16.01 3C8.83 3 3 8.82 3 16c0 2.3.6 4.55 1.73 6.54L3 29l6.62-1.69A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.19 3 16.01 3Zm0 23.65c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.93 1 1.05-3.83-.27-.42A10.6 10.6 0 1 1 16.01 26.65Zm5.82-7.94c-.32-.16-1.91-.94-2.21-1.04-.3-.11-.52-.16-.74.16-.22.32-.85 1.04-1.04 1.25-.19.22-.38.24-.7.08-.32-.16-1.35-.5-2.58-1.6-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.77-1.01-2.43-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.91-.78 2.18-1.53.27-.75.27-1.39.19-1.53-.08-.14-.3-.22-.62-.38Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="visual-badge badge-top">
            <span>✓</span>
            Agen Resmi
          </div>

          <div className="visual-badge badge-bottom">
            <span>●</span>
            Siap Membantu
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppAgent;