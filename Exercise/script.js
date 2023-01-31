/**
 * Assign a click event handler to the add button with an id of addTask.
 *
 * When the add button is clicked:
 *  - If the textbox is empty, generate an alert with the text “Error: Please enter a task first”.
 *  - If the text box is not empty, generate an alert with the text containing the task name. For example, if the text in the input box is “Complete Assignment”, generate an alert with text “New Task: Complete Assignment”.
 *  - Clear the text inside the text box after the add button is clicked.
 */

$(document).ready(function () {

    $('#addTask').click(function(event){
        if($('.textbox').val().trim() == "") {
            alert("Error: Please enter a task first")
        }
        else {
            // alert("New Task: " + $('.textbox').val())
            const newTask = $('<div>');
            const task = $('.textbox').val();
            newTask.addClass('task');
            newTask.append(task);
        
            const deleteBtn = $('<button>');
            deleteBtn.attr('id','delete');
            deleteBtn.addClass('fas fa-trash-alt');
            const doneBtn = $('<button>');
            doneBtn.attr('id','done');
            doneBtn.addClass('fas fa-check');
        
            newTask.append(deleteBtn);
            newTask.append(doneBtn);
    
            $('.notCompleted').append(newTask);
        }

        $('.textbox').val("");
    })

    $('.notCompleted').click(function(event){
        if($(event.target).hasClass('fa-check')){
            const doneTask = $(event.target).parent();
            doneTask.fadeOut(1000, function() {
                $(event.target).remove();
                $('.completed').append(doneTask);
                doneTask.hide().fadeIn(1000);
            });
        }

        if($(event.target).hasClass('fa-trash-alt')){
            const deleteTask = $(event.target).parent();
            deleteTask.fadeOut(1000, function() {
                deleteTask.remove();
            });
        }
    })

    $('.completed').click(function(event){
        if($(event.target).hasClass('fa-trash-alt')){
            const deleteTask = $(event.target).parent();
            deleteTask.fadeOut(1000, function() {
                deleteTask.remove();
            });
        }
    })

});