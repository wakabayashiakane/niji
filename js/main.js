$(function () {
    // ローダー終了（画像とテキストの両方を消す）
    function end_loader() {
        $('.loader').css({
            'visibility': 'hidden',
            'opacity': 0
        }).fadeOut(500, function () {
            $(this).remove();  // 完全に削除
            $('.mainvisual').css({
                'visibility': 'visible',
                'opacity': 1
            }).animate({ opacity: 1 }, 500);  // メインビジュアルを短時間でフェードイン
        });
    }

    // 一文字ずつテキストを表示
    function show_txt_one_by_one() {
        var text = $('.loader .txt').text();  // テキストを取得
        var textArray = text.split('');       // テキストを一文字ずつ配列に分割
        $('.loader .txt').text('');           // 元のテキストを空にする
        $('.loader .txt').css('display', 'block');  // テキストを表示可能にする

        textArray.forEach(function (char, index) {
            setTimeout(function () {
                $('.loader .txt').append(char);  // 一文字ずつ追加
            }, 80 * index);  // 80ミリ秒ごとに文字を追加
        });
    }

    // 初回訪問時かどうかを確認
    if (!sessionStorage.getItem('visited')) {
        // 初回訪問ならローダーを表示
        $('.loader').css({
            'visibility': 'visible',
            'opacity': 1
        });

        // タイマー処理
        $(window).on('load', function () {
            // 1. 1秒後に一文字ずつテキストを表示
            setTimeout(function () {
                show_txt_one_by_one();  // テキストを一文字ずつ表示
            }, 1000);

            // 2. 画像とテキストを3.5秒後に同時に消す
            setTimeout(function () {
                end_loader();  // ローダー全体をフェードアウト（画像とテキストを一緒に消す）
            }, 3500);

            // 訪問済みフラグを設定
            sessionStorage.setItem('visited', 'true');
        });
    } else {
        // 2回目以降の訪問ではローダーを非表示
        $('.loader').remove();
        $('.mainvisual').css({
            'visibility': 'visible',
            'opacity': 1
        }).animate({ opacity: 1 }, 500);  // メインビジュアルを短時間でフェードイン
    }

    // ページ内のスクロールやトップに戻った時もメインビジュアルを表示
    $(window).on('scroll', function () {
        if ($(this).scrollTop() === 0) {  // スクロールがトップに到達した時
            $('.mainvisual').css({
                'visibility': 'visible',
                'opacity': 1
            }).animate({ opacity: 1 }, 200);  // 短時間でフェードイン
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
