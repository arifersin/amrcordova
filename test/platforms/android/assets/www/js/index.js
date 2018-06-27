/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        var consent = document.getElementById("consent");
        var subjectToGdpr = document.getElementById("subjectToGdpr");
        var inputs = {"amrAppId" : "6cc8e89a-b52a-4e9a-bb8c-579f7ec538fe", "amrInterstitialZoneId" : "f99e409b-f9ab-4a2e-aa9a-4d143e6809ae", "amrBannerZoneId" : "86644357-21d0-45a4-906a-37262461df65", "amrVideoZoneId" : "88cfcfd0-2f8c-4aba-9f36-cc0ac99ab140", "userConsent" : consent, "subjectToGdpr" : subjectToGdpr};
        
        
        window.plugins.Amr.startWithConfig(inputs);
                  
    
        
        document.getElementById("loadBanner").addEventListener('click',  window.plugins.Amr.loadBanner);
        document.getElementById("hideBanner").addEventListener('click',  window.plugins.Amr.hideBanner);

        document.getElementById("destroyBanner").addEventListener('click',  window.plugins.Amr.destroyBanner);


        document.getElementById("loadInterstitial").addEventListener('click',  window.plugins.Amr.loadInterstitial);
        

        document.getElementById("loadVideo").addEventListener('click',  window.plugins.Amr.loadRewardedVideo);

        document.addEventListener('onVideoReady',  window.plugins.Amr.showRewardedVideo);
        
        document.addEventListener('onInterstitialReady',  window.plugins.Amr.showInterstitial);

        document.getElementById("testSuite").addEventListener('click',  window.plugins.Amr.startTestSuite);
            //window.plugins.Amr.requestVideoAd(inputs);

            //window.plugins.Amr.startTestSuite(inputs);
        document.addEventListener('onVideoFail', function(e){ 
            	alert("error: " + e.error); 
            });
        document.addEventListener('onBannerFail', function(e){ 
            	alert("error: " + e.error); 
            });
        document.addEventListener('onInterstitialFail', function(e){ 
            	alert("error: " + e.error); 
            });

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    
    
    
    
    
   
    
};

app.initialize();