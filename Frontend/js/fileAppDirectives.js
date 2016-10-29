/* js/fileAppDirectives */

function dropzone() {

    return function (scope, element, attrs) {

        var config = {
            url: 'http://localhost:8080/upload',
            maxFilesize: 100,
            maxFiles: 1,
            paramName: "uploadfile",
            maxThumbnailFilesize: 10,
            parallelUploads: 1,
            autoProcessQueue: false
        };

        var eventHandlers = {
            'addedfile': function (file) {
                scope.file = file;
                if (this.files[1] != null) {
                    this.removeFile(this.files[0]);
                }
                scope.$apply(function () {
                    scope.fileAdded = true;
                });
            },

            'sending': function (file, xhr, formData) {
                var samplejson =
                {
                    "channels" : [
                        {
                            "channel_id": "B1_EN",
                            "state": "visible",
                            "display_timeout": 60000,
                            "link_manager": {
                                "id": "96c955a9-870a-471d-94f6-3134ce98f69b"
                            }
                        },
                        {
                            "channel_id": "B2_EN",
                            "state": "visible",
                            "display_timeout": 30000,
                            "link_manager": {
                                "id": "96c955a9-870a-471d-94f6-3134ce98f69b"
                            }
                        }
                    ]
                };

                formData.append("filesize", file.size);
                formData.append("meta", JSON.stringify(samplejson));
            },

            'success': function (file, response) {
            }
        };

        dropzone = new Dropzone(element[0], config);

        angular.forEach(eventHandlers, function (handler, event) {
            dropzone.on(event, handler);
        });

        scope.processDropzone = function () {
            dropzone.processQueue();
        };

        scope.resetDropzone = function () {
            dropzone.removeAllFiles();
        }
    }
}

angular.module('fileApp').directive('dropzone', dropzone);