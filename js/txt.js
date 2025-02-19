$(document).ready(function() {
    // 监听“点我开始”按钮的第一次点击事件
    $(".begin").one("click", function() {
        // 9秒后淡入文本框
        setTimeout(function() {
            $("#textBox").removeClass("hidden").css("opacity", 1);
            typewriterEffect();
        }, 9000);
    });

    // 打字机效果
    function typewriterEffect() {
        var text = $("#textContent").text();
        var index = 0;
        $("#textContent").text("");
        var timer = setInterval(function() {
            if (index < text.length) {
                $("#textContent").append(text.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50); // 每50毫秒打印一个字符
    }

    // 最小化按钮点击事件
    $("#minimizeButton").click(function() {
        $("#textBox").addClass("hidden").css("opacity", 0);
        $("#extraButton").removeClass("hidden").css("opacity", 1);
        $("#textBox").css({
            top: "50%",
            left: "calc(100% - 100px)",
            transform: "translateY(-50%)"
        });
    });

    // 额外滴按钮点击事件
    $("#extraButton").click(function() {
        $("#textBox").removeClass("hidden").css("opacity", 1);
        $("#extraButton").addClass("hidden").css("opacity", 0);
        $("#textBox").css({
            top: "3%",
            left: "50%",
            transform: "translateX(-50%)"
        });
    });
});