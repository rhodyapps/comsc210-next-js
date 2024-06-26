import React from 'react';
/* import './index.css'; */
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="container">
            <header>
              <div className="container">
                <div id="branding">
                  <h1><span class="highlight">Synthetic</span> Systems</h1>
                </div>
                <nav>
                  <u1>
                    <li className="current"><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                  </u1>
                </nav>
              </div>
            </header>

      <section id="showcase">
        <div className="container">
          <h1>Affordable & Professional ChatBot Developers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus et augue vitae iaculis. Suspendisse fringilla ex ut odio ultrices, vel aliquam nulla mollis.</p>
        </div>
      </section>

      <section id="newsletter">
      <script>
        window.embeddedChatbotConfig = {
        chatbotId: "UHY7UoIZCLimpnxRCamIK",
        domain: "www.chatbase.co"}
        </script>
        <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="UHY7UoIZCLimpnxRCamIK"
        domain="www.chatbase.co"
        defer>
        </script>
      </section>

      <section id="boxes">
        <div className="container">
                    <div className="box">
                      <Image src="/img/chatbot-logo1.png" alt="Employee Education" width={400}
      height={100} />  {/* Added alt text for accessibility */}
                      <h3>Employee Education</h3>
                      <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
                    </div>

          <div className="box">
          <Image src="/img/chatbot-logo2.png" alt="Customer Support" width={400}
      height={100} />  {/* Added alt text for accessibility */}
            <h3>Application Help</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>

          <div className="box">
            <Image src="/img/chatbot-logo3.png" alt="System Troubleshooting" width={400}
      height={100} />  {/* Added alt text for accessibility */}
            <h3>System Troubleshooting</h3>
            <p>Nam in dignissim augue, at vestibulum lacus. Donec scelerisque nec risus quis lobortis.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Synthetic Systems, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Home;