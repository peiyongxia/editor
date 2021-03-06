/**
 * @preserve
 *
 *                                      .,,,;;,'''..
 *                                  .'','...     ..',,,.
 *                                .,,,,,,',,',;;:;,.  .,l,
 *                               .,',.     ...     ,;,   :l.
 *                              ':;.    .'.:do;;.    .c   ol;'.
 *       ';;'                   ;.;    ', .dkl';,    .c   :; .'.',::,,'''.
 *      ',,;;;,.                ; .,'     .'''.    .'.   .d;''.''''.
 *     .oxddl;::,,.             ',  .'''.   .... .'.   ,:;..
 *      .'cOX0OOkdoc.            .,'.   .. .....     'lc.
 *     .:;,,::co0XOko'              ....''..'.'''''''.
 *     .dxk0KKdc:cdOXKl............. .. ..,c....
 *      .',lxOOxl:'':xkl,',......'....    ,'.
 *           .';:oo:...                        .
 *                .cd,      ╔═╗┌┬┐┬┌┬┐┌─┐┬─┐    .
 *                  .l;     ║╣  │││ │ │ │├┬┘    '
 *                    'l.   ╚═╝─┴┘┴ ┴ └─┘┴└─   '.
 *                     .o.                   ...
 *                      .''''','.;:''.........
 *                           .'  .l
 *                          .:.   l'
 *                         .:.    .l.
 *                        .x:      :k;,.
 *                        cxlc;    cdc,,;;.
 *                       'l :..   .c  ,
 *                       o.
 *                      .,
 *
 *              ╦ ╦┬ ┬┌┐ ┬─┐┬┌┬┐  ╔═╗┌┐  ┬┌─┐┌─┐┌┬┐┌─┐
 *              ╠═╣└┬┘├┴┐├┬┘│ ││  ║ ║├┴┐ │├┤ │   │ └─┐
 *              ╩ ╩ ┴ └─┘┴└─┴─┴┘  ╚═╝└─┘└┘└─┘└─┘ ┴ └─┘
 *
 *
 * Created by Valentin on 10/22/14.
 *
 * Copyright (c) 2015 Valentin Heun
 *
 * All ascii characters above must be included in any redistribution.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/*********************************************************************************************************************
 ******************************************** TODOS *******************************************************************
 **********************************************************************************************************************

 **
 * TODO -
 **

 **********************************************************************************************************************
 ******************************************** onload content **********************************************************
 **********************************************************************************************************************/

/**
 * @desc
 * @param
 * @param
 * @return
 **/

window.onload = function () {
    uiButtons = document.getElementById("GUI");
    overlayDiv = document.getElementById('overlay');
    overlayImg = document.getElementById('overlayImg');

    GUI();

    if (globalStates.platform !== 'iPad' && globalStates.platform !== 'iPhone' && globalStates.platform !== 'iPod touch') {
        globalStates.platform = false;
    }


    if (globalStates.platform === 'iPhone' || globalStates.platform === 'iPod touch') {
        document.getElementById("logButtonDiv").style.visibility = "hidden";
       // document.getElementById("reloadButtonDiv").style.visibility = "hidden";
     //   document.getElementById("preferencesButtonDiv").style.bottom = "36px";

        var editingInterface = document.getElementById("content2title");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.left = "38%";
        editingInterface.style.right = "22%";

        editingInterface = document.getElementById("content1title");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.left = "2%";
        editingInterface.style.right = "65%";


        editingInterface = document.getElementById("content2");
        editingInterface.style.fontSize = "9px";
        editingInterface.style.left = "38%";
        editingInterface.style.right = "22%";
        editingInterface.style.bottom = "14%";

        editingInterface = document.getElementById("content11");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.width = "40%";

        editingInterface = document.getElementById("content12");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.width = "60%";


        editingInterface = document.getElementById("content13");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.width = "40%";

        editingInterface = document.getElementById("content14");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.width = "60%";


        editingInterface = document.getElementById("content15");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.width = "40%";
        editingInterface.innerHTML = '<b>External Interface</b><br>';

        editingInterface = document.getElementById("content16");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.width = "60%";

        editingInterface = document.getElementById("content18");
        editingInterface.style.visibility = 'hidden';


        editingInterface = document.getElementById("content1");
        editingInterface.style.fontSize = "12px";
        editingInterface.style.left = "2%";
        editingInterface.style.right = "65%";
        editingInterface.style.bottom = "14%";

    } else {
        editingInterface = document.getElementById("content15");
        editingInterface.style.paddingTop = "13px";


        editingInterface = document.getElementById("content20");
        editingInterface.innerHTML = '<input id="newURLText"' +

            "style='text-align: left; font-family: Helvetica Neue, Helvetica, Arial; font-size: large;   -webkit-user-select: text;'" +
            'type="text" name="newURL"  size="27" placeholder="http://..."' + "oninput='newURLTextLoad()'><br>";
    }

    globalCanvas.canvas = document.getElementById('canvas');
    globalCanvas.canvas.width = globalStates.height;
    globalCanvas.canvas.height = globalStates.width;

    globalCanvas.context = canvas.getContext('2d');

    if (globalStates.platform) {
        window.location.href = "of://kickoff";
    }

    document.handjs_forcePreventDefault = true;
    globalCanvas.canvas.handjs_forcePreventDefault = true;

    globalCanvas.canvas.addEventListener("pointerdown", canvasPointerDown, false);
    ec++;

    document.addEventListener("pointermove", getPossition, false);
    ec++;
    document.addEventListener("pointerdown", documentPointerDown, false);
    //document.addEventListener("pointerdown", getPossition, false);
    ec++;
    document.addEventListener("pointerup", documentPointerUp, false);
    ec++;
    window.addEventListener("message", postMessage, false);
    ec++;
    overlayDiv.addEventListener('touchstart', function (e) {
        e.preventDefault();
    });


    cout("onload");

};

/**
 * @desc
 * @param
 * @param
 * @return
 **/

var postMessage = function (e) {

    //  cout("received: "+ e.data);
    var msgContent = JSON.parse(e.data);

    var tempThisObject = false;

    var thisVersionNumber = 0;

    if (typeof msgContent.pos !== "undefined" && typeof msgContent.obj !== "undefined") {
        if (typeof objectExp[msgContent.obj] !== "undefined") {
            if (msgContent.pos === msgContent.obj) {
                tempThisObject = objectExp[msgContent.pos];
                thisVersionNumber  = parseInt(objectExp[msgContent.pos].version.replace(/\./g, ""));
            } else {
                if (typeof objectExp[msgContent.obj].objectValues[msgContent.pos] !== "undefined") {
                    tempThisObject = objectExp[msgContent.obj].objectValues[msgContent.pos];
                    thisVersionNumber  = parseInt(objectExp[msgContent.obj].version.replace(/\./g, ""));
                }
            }
        }
    }



    if (tempThisObject !== false) {

            if (typeof msgContent.width !== "undefined" && typeof msgContent.height !== "undefined") {

                document.getElementById(msgContent.pos).style.width = msgContent.width;
                document.getElementById(msgContent.pos).style.height = msgContent.height;
                document.getElementById(msgContent.pos).style.top = ((globalStates.width - msgContent.height) / 2);
                document.getElementById(msgContent.pos).style.left = ((globalStates.height - msgContent.width) / 2);

                document.getElementById("iframe" + msgContent.pos).style.width = msgContent.width;
                document.getElementById("iframe" + msgContent.pos).style.height = msgContent.height;
                document.getElementById("iframe" + msgContent.pos).style.top = ((globalStates.width - msgContent.height) / 2);
                document.getElementById("iframe" + msgContent.pos).style.left = ((globalStates.height - msgContent.width) / 2);
                
            }
        if (typeof msgContent.sendMatrix !== "undefined") {
                if (msgContent.sendMatrix === true) {
                    if(thisVersionNumber>=32) {
                        tempThisObject.sendMatrix = true;
                        document.getElementById("iframe" + msgContent.pos).contentWindow.postMessage(
                            '{"projectionMatrix":' + JSON.stringify(globalStates.realProjectionMatrix) + "}", '*');
                    }
                }
                // forward postMessages to all iFrames
            }
        if (typeof msgContent.ohGlobalMessage !== "undefined") {
                var iframes = document.getElementsByTagName('iframe');
                for (var i = 0; i < iframes.length; i++) {

                    if (iframes[i].id !== "iframe" + msgContent.pos && iframes[i].style.visibility !== "hidden") {
                        if(thisVersionNumber>=32) {
                            iframes[i].contentWindow.postMessage(
                                JSON.stringify(
                                    {
                                        "ohGlobalMessage": msgContent.ohGlobalMessage
                                    })
                                , "*");
                        }
                    }
                }
            }
        if (typeof msgContent.fullScreen !== "undefined") {
               // console.log("gotfullscreenmessage");
                if (msgContent.fullScreen === true) {
                    tempThisObject.fullScreen = true;

                    document.getElementById("thisObject" + msgContent.pos).style.webkitTransform =
                        'matrix3d(1, 0, 0, 0,' +
                        '0, 1, 0, 0,' +
                        '0, 0, 1, 0,' +
                        '0, 0, 0, 1)';

                }
            if (msgContent.fullScreen === false) {
                   // console.log("noFullscreen");
                    tempThisObject.fullScreen = false;
                }

            }
    }

    /* if (typeof msgContent.sendAcl !== "undefined") {
     if(msgContent.sendAcl === true) {
     objectExp[msgContent.obj].sendAcl = true;
     window.location.href = "of://sendAccelerationData";
     }
     }*/


    // cout("postMessage");

};
