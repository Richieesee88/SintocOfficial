var $
function render(data){
    var html ="<div class='commentBox'><div class='leftPanelImg'><img src = 'https://via.placeholder.com/130x100'></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><br><p>"+data.body+"</p><br></div><div class='clear'></div></div>";
    $('#container').append(html);
}

$(document).ready(function(){
    
        var comment = [
            {"name": "Sintoc", "date": "Dec, 8 2021", "body": "Comment Section"}
        ];

        for (var i=0;i<comment.length;i++){
            render(comment[i]);
            }

            $('#addComment').click(function(){
                var addObj = {
                    "name": $('#name').val(),
                    "date": $('#date').val(),
                    "body": $('#bodyText').val()
                };
                comment.push(addObj);
                render(addObj);
                $('#name').val('');
                $('#date').val('dd/mm/yyyy');
                $('#bodyText').val('');
            });
    
});