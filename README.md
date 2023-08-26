# peer-to-peer data exfiltration

ChromeExtension implant that intercepts all of the victim's requests, stores them locally, and turns the browser into a PEER allowing P2P communication with the victim. 

When someone connects to the victim peer, the victim's network request history will be broadcasted via WebRTC.

# Defending The Browser Extension Attack Surface
Generate Chrome enterprise policies with hardened browser security. This allows you to prevent extensions from accessing these specific sites even if you've already granted them permission to do so when first installing them.

# What does this protect against?
This protects from hijacked extensions with backdoored updates and against extensions that have been exploited due to a security vulnerability in their code.

One good example of the former type of attack this protects against is the case of the MEGA Chrome extension getting hacked. Basically, the account which publishes the MEGA extension likely was phished, the result being that a backdoored extension update was pushed out to all extension users (millions). Per MEGA's statement the extension keylogged and stole “credentials for sites including amazon.com, live.com, github.com, google.com (for webstore login), myetherwallet.com, mymonero.com, [and] idex.market.”

Read more here: https://blog.mega.io/security-warning-for-mega-chrome-extension-users/

# Some of the risks of WebRTC security:
1. IP address exposure: WebRTC can expose your IP address to other users, even if you are behind a NAT firewall. This can be used to track your online activity or launch denial-of-service attacks.
2. Data interception: WebRTC traffic is not encrypted by default, so it can be intercepted by third parties. This could allow them to steal your personal information, such as your name, address, and phone number.
3. Malicious code execution: WebRTC vulnerabilities can be exploited by attackers to execute malicious code on your computer. This could allow them to steal your data or take control of your computer.
4. Session hijacking: WebRTC sessions can be hijacked by attackers, allowing them to take control of your conversation. This could be used to eavesdrop on your conversation or impersonate you.

# To mitigate these risks, you can take the following steps:
1. Only use WebRTC with trusted websites: Only use WebRTC with websites that you trust.
2. Be careful about what you click on: Don't click on links in emails or on websites unless you are sure they are legitimate.
3. Use a VPN: A VPN can help to protect your privacy and security by encrypting your traffic.
4. Keep your software up to date: Software updates often include security patches that can help to protect your computer from new threats.
5. Disable WebRTC in your browser: If you are not using WebRTC, you can disable it in your browser. This will help to protect your privacy and security.

# Inspiration + Disclaimer
THIS IS FOR EDUCATIONAL PURPOSES ONLY! 
Do not attempt to violate the law with anything contained here. If this is your intention, then **LEAVE NOW!** Neither administration of this server, the authors of this material, or anyone else affiliated in any way, is going to accept responsibility for your actions.

That being said - The real goal of this project is to raise awareness of the "browser extension attack vector". Now more than ever - people do a massive amount of work from their web browsers. 

CursedChrome: https://github.com/mandatoryprogrammer/CursedChrome

Intercept Web Requests:
https://gilfink.medium.com/adding-web-interception-abilities-to-your-chrome-extension-fb42366df425


## Connect to the Victim Peer
You can use index.html, without the need for a webserver. Just open the index.html with the browser.
[![Build Status](https://enjin-lab-dclvd.mongodbstitch.com/p2p1.png)](https://enjin-lab-dclvd.mongodbstitch.com/p2p1.png)

You can simply go to this website and enter the peer-id, then connect. 
[![Build Status](https://enjin-lab-dclvd.mongodbstitch.com/p2p2.png)](https://enjin-lab-dclvd.mongodbstitch.com/p2p2.png)

https://jmcker.github.io/Peer-to-Peer-Cue-System/send.html

Or - if you wanna do it via code - 
`var conn = peer.connect('victim-peer-id');`
