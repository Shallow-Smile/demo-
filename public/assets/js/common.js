$('#logout').on('click', function() {
    var isConfirm = (confirm('是否确认退出'));
    if (isConfirm) {
        // location.href = 'login.html'
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                location.href = 'login.html';
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
});