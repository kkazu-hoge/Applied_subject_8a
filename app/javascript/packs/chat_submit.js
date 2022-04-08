/*global $*/
// $(function(){
//   $("#test").on('click', sayHello);
// });

// function sayHello(){
//     alert("こんにちは");
// }

// $(function(){
//   $("#chat_message").on('keydown', sayHello);
// });

// $("#chat_message").on('keydown', function(event){
//   if(event.key === 'Enter'){
//     sayHello();
//   }
// });

// テキストフィールドのエンターでイベント発火できることを確認
    // var btn = document.getElementById('chat_message');
    // // Enterキー押下時、送信処理が実行する
    // window.document.onkeydown = function(event){
    //     if (event.key === 'Enter') {
    //         sayHello();
    //     }
    // }

    var btn = document.getElementById('chat_message');
    // Enterキー押下時、送信処理が実行する
    window.document.onkeydown = function(event){
        var L_user_id = $('#user_id').val().toString();
        var L_relationship_id = $('#relationship_id').val().toString();
        var L_message =  $('#chat_message').val();
        var L_url = "/users/"+L_user_id+"/relationships/"+L_relationship_id+"/chats";

        // "/users/${L_user_id}/relationships/${L_relationship_id}/chats"
        if (event.key === 'Enter') {
          $.ajax({
              url: L_url,
              type: "POST",
              data: { message: L_message,
                      user_id: $('#user_id').val(),
                      relationship_id: $('#relationship_id').val()
                      },
              dataType: "json",
              success: function(data) {
                  alert("success");
              },
              error: function(data) {
                  alert("error");
              }
          });
        }
    }

// $("#chat_message").on('onkeydown', function(event){
//     var L_user_id = $('#user_id').val();
//     var L_relationship_id = $('#relationship_id').val();
//     var L_message =  $('#chat_message').val();

//     if(event.key === 'Enter'){
//         $.ajax({
//             url: "/users/${L_user_id}/relationships/${L_relationship_id}/chats",
//             type: "POST",
//             data: { message: L_message,
//                     user_id: L_user_id,
//                     relationship_id: L_relationship_id
//                     },
//             dataType: "json",
//             success: function(data) {
//                 alert("success");
//             },
//             error: function(data) {
//                 alert("errror");
//             }
//         });
//     }
// });



// $("#chat_message").on('onkeydown', function(event){
//     var L_user_id = $('#user_id').val();
//     var L_relationship_id = $('#relationship_id').val();
//     var L_message =  $('#chat_message').val();

//     if(event.key === 'Enter'){
//         $.ajax({
//             url: "/users/${L_user_id}/relationships/${L_relationship_id}/chats",
//             type: "POST",
//             data: { message: L_message,
//                     user_id: L_user_id,
//                     relationship_id: L_relationship_id
//                     },
//             dataType: "json",
//             success: function(data) {
//                 alert("success");
//             },
//             error: function(data) {
//                 alert("errror");
//             }
//         });
//     }
// });