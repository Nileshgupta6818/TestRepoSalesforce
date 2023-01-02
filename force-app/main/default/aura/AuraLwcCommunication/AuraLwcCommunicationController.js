({
    handleEvent : function(component, event) {

        let message=event.getParam('msg');

        component.set('v.message',message);
    }
})
