$(function () {
    function end_loader() {
        $('.loader').css({
            'visibility': 'hidden',
            'opacity': 0
        }).fadeOut(500, function () {
            $(this).remove();  // ローダーを完全に削除
            // メインビジュアルをフェードイン
            $('.mainvisual').css({
                'visibility': 'visible',
                'opacity': 1
            }).animate({ opacity: 1 }, 500);

            // ヘッダーもフェードイン
            $('header').css({
                'visibility': 'visible',
                'opacity': 1
            }).animate({ opacity: 1 }, 500);  // ヘッダーをフェードイン
        });
    }

    function show_txt_one_by_one() {
        var text = $('.loader .txt').text();
        var textArray = text.split('');
        $('.loader .txt').text('');
        $('.loader .txt').css('display', 'block');

        textArray.forEach(function (char, index) {
            setTimeout(function () {
                $('.loader .txt').append(char);
            }, 80 * index);
        });
    }

    if (!sessionStorage.getItem('visited')) {
        $('.loader').css({
            'visibility': 'visible',
            'opacity': 1
        });

        $(window).on('load', function () {
            setTimeout(function () {
                show_txt_one_by_one();
            }, 1000);

            setTimeout(function () {
                end_loader();
            }, 3500);

            sessionStorage.setItem('visited', 'true');
        });
    } else {
        $('.loader').remove();

        // 2回目以降の訪問でも、ヘッダーとメインビジュアルをフェードイン
        $('.mainvisual, header').css({
            'visibility': 'visible',
            'opacity': 1
        }).animate({ opacity: 1 }, 200);
    }

    $(window).on('scroll', function () {
        if ($(this).scrollTop() === 0) {
            $('.mainvisual, header').css({
                'visibility': 'visible',
                'opacity': 1
            }).animate({ opacity: 1 }, 200);
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('#js-toggle-btn');
    const nav = document.querySelector('#js-nav');

    // ハンバーガーメニューをクリックしたときの動作
    toggleBtn.addEventListener('click', function () {
        toggleBtn.classList.toggle('active'); // ハンバーガーメニューにactiveクラスを付け外し
        nav.classList.toggle('is-open'); // ナビゲーションメニューにis-openクラスを付け外し
    });
});


// スクロール時のイベント
$(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + 100) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
        }
    });
});








// ボタンをクリックしたとき、トップにスクロール
const btn = document.getElementById("top-to-btn");

btn.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

// スクロールイベントでボタンの表示/非表示を制御
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {  // 200px以上スクロールしたらボタンを表示
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});


// JavaScriptでタブ切り替え機能を実装(採用情報ページ)
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // すべてのタブからactiveクラスを削除
            tabs.forEach(item => item.classList.remove('active'));
            // クリックされたタブにactiveクラスを追加
            tab.classList.add('active');

            // すべてのコンテンツを非表示にする
            contents.forEach(content => content.classList.remove('active'));
            // 選択されたタブに対応するコンテンツを表示
            const target = document.getElementById(tab.dataset.tab);
            target.classList.add('active');
        });
    });
});
