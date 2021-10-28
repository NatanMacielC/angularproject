function getImageFromPdf(page, pdf, canvasId, callback) {
    pdfjsLib.getDocument(pdf).then(doc => {
        console.log(doc._pdfInfo.numPages);
        doc.getPage(page).then(page => {
            var myCanvas = document.getElementById(canvasId);
            var context = myCanvas.getContext("2d");

            //var viewport = page.getViewport(myCanvas.width / page.getViewport(1.0).width);
            var viewport = page.getViewport(2);
            myCanvas.width = viewport.width;
            myCanvas.height = viewport.height;

            // viewport.width = myCanvas.width;
            // viewport.height = myCanvas.height;

            var pageRendering = page.render({
                canvasContext: context,
                viewport: viewport
            });

            if (callback != null) {
                var completeCallback = pageRendering._internalRenderTask.callback;
                pageRendering._internalRenderTask.callback = function (error) {
                    //Step 2: what you want to do before calling the complete method                  
                    completeCallback.call(this, error);
                    //Step 3: do some more stuff
                    callback(error);
                };
            }
        });
    });
}

function resizeIFrameToFitContent(iFrame) {
    iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}