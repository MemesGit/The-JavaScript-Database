Перед отправкой запроса на удаление, 
признаком хорошего тона считается запросить у пользователя подтверждение. Простейший пример, как это сделать приведен ниже:

<form onSubmit="return confirm('Для удаления всей информации нажмите OK');">
<input name="delall" type="submit" value="Удалить всё">
</form>
