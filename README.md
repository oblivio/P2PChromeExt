# peer-to-peer data exfiltration

ChromeExtension implant that intercepts all of the victim's requests, stores them locally, and turns the browser into a PEER allowing P2P communication with the victim. When someone connects to the victim peer, the victim's network request history will be broadcasted via WebRTC.


# Inspiration + Disclaimer
THIS IS FOR EDUCATIONAL PURPOSES ONLY! 
Do not attempt to violate the law with anything contained here. If this is your intention, then **LEAVE NOW!** Neither administration of this server, the authors of this material, or anyone else affiliated in any way, is going to accept responsibility for your actions.

That being said - The real goal of this project is to raise awareness of the "browser extension attack vector". Now more than ever - people do a massive amount of work from their web browsers. Web browser security is not something usually handled by Antivirus or Firewall. 

CursedChrome: https://github.com/mandatoryprogrammer/CursedChrome

Intercept Web Requests:
https://gilfink.medium.com/adding-web-interception-abilities-to-your-chrome-extension-fb42366df425


## Connect to the Victim Peer

You can simply go to this website and enter the peer-id, then connect. 
https://jmcker.github.io/Peer-to-Peer-Cue-System/send.html

Or - if you wanna do it via code - 
`var conn = peer.connect('victim-peer-id');`
