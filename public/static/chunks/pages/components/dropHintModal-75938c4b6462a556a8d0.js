(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3937],{75669:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var n=s(67294),i=s(53352),l=s(85893);function d(){var e=(0,i.Ds)().enqueueSnackbar;return(0,n.useEffect)((function(){try{$("#addFriends").unbind("click"),$("#addFriends").bind("click",(function(){var e=$("#friends").find("div").eq(0).clone();e.find("label").remove(),e.find("input").val(""),e.css({marginTop:-10,paddingTop:0,paddingBottom:0}),e.attr("added",1),e.appendTo($("#friends"))})),$("#sendHint").unbind("click"),$("#sendHint").bind("click",(function(){var a=[];$.each($("[mail]"),(function(){a.push($(this).val())})),-1==$("#message").val().indexOf(window.location.href)&&$("#message").val($("#message").val()+"<br />Sent from: "+window.location.href),$.ajax({url:"https://costercatalog.com/api/index.php?request=dropHintMail",type:"POST",dataType:"json",data:{email:a.join(","),message:$("#message").val().replace(/(?:\r\n|\r|\n)/g,"<br>"),sender:$("#sender").val()},success:function(a){var s="success"!=a.status?"error":"success";e("success"!=a.status?"Hint sending failed.":"Hint sent successfuly",{variant:s}),"success"==a.status&&($("#dropHintModal").find("input").val(""),$("#dropHintModal").find("textarea").val(""),$("[added]").remove()),setTimeout((function(){$("#dropHintModal").modal("hide")}),2e3)}})}))}catch(a){}})),(0,l.jsx)("div",{className:"modal fade",id:"dropHint",tabIndex:"-1","aria-labelledby":"dropHintModal","aria-hidden":"true",children:(0,l.jsx)("div",{className:"modal-dialog modal-dialog-centered modal-dialog-scrollable r-container",id:"dropHintModal",children:(0,l.jsxs)("div",{className:"modal-content px-sm-5 px-4 py-4 round-form",style:{overflowY:"auto"},children:[(0,l.jsxs)("div",{className:"modal-header  py-3 px-0",children:[(0,l.jsx)("h3",{className:"modal-title",children:"DROP A HINT"}),(0,l.jsx)("button",{type:"button",className:"btn-close d-sm-none d-block","data-bs-dismiss":"modal","aria-label":"Close",style:{position:"absolute",right:30}})]}),(0,l.jsxs)("div",{id:"friendsContainer",children:[(0,l.jsx)("div",{id:"friends",children:(0,l.jsx)("div",{friend:"1",className:"modal-body px-0",children:(0,l.jsxs)("div",{className:"friend-info row m-0  pt-2 pb-4",children:[(0,l.jsxs)("div",{className:"friend-name col-sm-6 col-12 px-0 pe-sm-3 pe-0",children:[(0,l.jsx)("label",{htmlFor:"friendName",children:"Friend's Name"}),(0,l.jsx)("input",{type:"text",className:"form-control px-4 py-3",placeholder:"Name"})]}),(0,l.jsxs)("div",{className:"friend-name col-sm-6 col-12 px-0 ps-sm-3 ps-0",children:[(0,l.jsx)("label",{htmlFor:"friendName",children:"Friend's Email"}),(0,l.jsx)("input",{mail:"1",type:"text",className:"form-control px-4 py-3",placeholder:"Email"})]})]})})}),(0,l.jsx)("button",{id:"addFriends",className:"btn pink-btn py-3 btn-add-friend round-form text-uppercase mt-2 mb-5",children:"Add another friend"}),(0,l.jsx)("label",{className:"messge-label mb-3",htmlFor:"messageBox",children:"Message"}),(0,l.jsx)("textarea",{id:"message",className:"form-control p-4",rows:4,placeholder:"Something Here..."}),(0,l.jsxs)("div",{className:"your-info row m-0 pt-5 py-4",children:[(0,l.jsxs)("div",{className:"your-name col-sm-6 col-12 px-0 pe-sm-3 pe-0",children:[(0,l.jsx)("label",{htmlFor:"yourName",children:"Your Name"}),(0,l.jsx)("input",{type:"text",className:"form-control px-4 py-3",placeholder:"Name"})]}),(0,l.jsxs)("div",{className:"your-name col-sm-6 col-12 px-0 ps-sm-3 ps-0",children:[(0,l.jsx)("label",{htmlFor:"yourName",children:"Your Email"}),(0,l.jsx)("input",{id:"sender",type:"text",className:"form-control px-4 py-3",placeholder:"Email"})]})]}),(0,l.jsxs)("div",{className:"check-panel d-flex align-items-center",children:[(0,l.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),(0,l.jsx)("label",{className:"form-check-label ms-3 text-capitalize",htmlFor:"flexCheckDefault",children:"Sign up for special offers"})]}),(0,l.jsx)("p",{className:"description pt-4 pb-5",children:"By signing up you confirm that you have read the Privacy Policy and agree that your email and gender will be collected and used by Royal Coster for the purposes of sending news, promotions and updates via email. You can withdraw your consent at any time by unsubscribing or contacting us via"}),(0,l.jsx)("button",{id:"sendHint",className:"btn blue-btn btn-send text-uppercase round-form py-3",children:"Send"})]})]})})})}},83355:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dropHintModal",function(){return s(75669)}])}},function(e){e.O(0,[9774,2888,179],(function(){return a=83355,e(e.s=a);var a}));var a=e.O();_N_E=a}]);