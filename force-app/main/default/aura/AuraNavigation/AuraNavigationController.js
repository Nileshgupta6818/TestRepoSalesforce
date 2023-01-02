({
    onLoad : function(component, event, helper) {
        
        let pageref=component.get('v.pageReference');
        var id=pageref.state.c__id;
        console.log('id '+id);
        component.set('v.data',id);

    }
})
