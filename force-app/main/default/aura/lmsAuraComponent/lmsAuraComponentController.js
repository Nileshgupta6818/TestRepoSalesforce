({
    handleChange : function(component, event) {
    let inputValue=event.target.value;
    console.log(inputValue);
    component.set('v.inputValue',inputValue);
    
},

publishEvent:function(component){
    let msg= component.get('v.inputValue');
    console.log(msg);
    let message={
        lmsData:{
            value:msg
        }
    }
    component.find("sampleMessageChannel").publish(message);

    
    },

    handleRecive:function(component,message){
        if(message!=null && message.getParam('lmsData').value!=null){
            component.set('v.recivedMessage',message.getParam('lmsData').value);
        }
    }



})
