import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) return;

      const js = document.createElement('script');
      js.id = 'facebook-jssdk';
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      document.body.appendChild(js);
    };

    // Initialize SDK
    window.fbAsyncInit = () => {
      window.FB.init({
        xfbml: true, // Parse the plugin
        version: 'v17.0', // Use the latest SDK version
      });
    };

    loadFacebookSDK();
  }, []);

  return (
    <div>
      {/* Facebook Chat Plugin */}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="<page_id_here>" // Replace with your Facebook page ID
        theme_color="#0084ff" // Customize the chat color
        logged_in_greeting="Hi there! How can we help?"
        logged_out_greeting="Hi! Please log in to chat."
      ></div>
    </div>
  );
};

export default ChatBot;