((function(View) {

    var avatarClass = 'pp-conversation-part-msg-by-admin-avatar';

    View.$adminImageMessage = (function() {

        /**
         * @constructor
         */
        function PPConversationPartImageByAdmin(item) {
            View.PPDiv.call(this, 'pp-conversation-part-image-by-admin');

            var selector = '#pp-conversation-part-' + item.messageId + ' .pp-conversation-part-image-by-admin-img',
                
                onImageClick = function() { // 'click' event                    
                    if (isZoomable()) { // zoomable
                        View.$imageViewer.show($(selector));
                    } else { // open in a new window
                        window.open(item.message.image.url);
                    }
                },

                getImageInitialStyle = function() { // get style based `isZoomable()`

                    if (!isZoomable()) {
                        return 'cursor:pointer';
                    }

                    return null;
                    
                };

            // Listen for userInfo change event
            Service.$pubsub.subscribe('user/infochange/' + item.user.id, function(topics, user) {

                var selector = '#pp-conversation-part-' + item.messageId,
                    userInfo = user.getInfo();

                // Change user avatar
                $(selector)
                    .find('.' + avatarClass)
                    .attr('src', userInfo.user_avatar);
                
            });
            
            this.add(new View.PPDiv('pp-conversation-part-image-by-admin-o')
                     .add(new View.PPDiv('pp-conversation-part-image-by-admin-o1')
                          .add(View.conversationPartTools.buildAvatars( item.user.avatar, Service.$conversationManager.activeConversation().token ))
                          .add(new View.PPDiv('pp-conversation-part-msg-by-admin-body-container')
                               .add(new View.PPDiv('pp-conversation-part-image-by-admin-o3')
                                    .add(new View.PPDiv('pp-conversation-part-image-by-admin-o4')
                                         .add(new View.PPElement('img', {
                                             src: item.message.image.url,
                                             selector: selector, 
                                             'class': 'pp-conversation-part-image-by-admin-img pp-image-viewable',
                                             style: getImageInitialStyle(),
                                             event: {
                                                 click: onImageClick
                                             }
                                         }))))
                               .add(new View.PPDiv('pp-conversation-part-image-by-admin-timestamp-container')
                                    .add(new View.PPElement('span', {
                                        'class': 'pp-selectable pp-font',
                                        id: 'pp-conversation-part-image-by-admin-timestamp-' + item.messageId
                                    })
                                         .text())))));
        }
        extend(PPConversationPartImageByAdmin, View.PPDiv);

        var build = function(item) { // build a new AdminImage
            return new PPConversationPartImageByAdmin(item);
        },

            isZoomable = function() { // weather or not image can zoom-in zoom-out
                return true;
            };

        return {
            build: build
        }
        
    })();
    
})(View));
