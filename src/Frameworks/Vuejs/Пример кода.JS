// Создается сущность Vue.
var demo = new Vue({

    // Элемент DOM, к которому будет прикреплена модель.
    el: '#main',

    // Определяем свойства и передаем им значения.
    data: {
        show_tooltip: false,
        text_content: 'Правь меня.'
    },

    // Функции, которые будут использоваться.
    methods: {
        hideTooltip: function(){
            // Когда модель изменена, представление обновится.
            this.show_tooltip = false;
        },
        toggleTooltip: function(){
            this.show_tooltip = !this.show_tooltip;
        }
    }
})
