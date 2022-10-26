export function ProfileContents() {
  return (
    <div class="max-w-4xl flex items-center flex-wrap sm:py-6 py-20 mx-auto sm:my-0">
      <div class="w-full bg-gray-100 rounded-lg sm:w-3/5 sm:rounded-lg sm:rounded-r-none sm:opacity-75 opacity-90 mx-6 sm:mx-0">
        <div class="text-center sm:text-left p-4 md:p-12 shadow-2xl">
          <div
            class="sm:hidden block shadow-xl rounded-full mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style="background-image: url('/profile.jpg')"
          >
          </div>
          <h1 class="text-3xl font-bold">Satoru Murakami</h1>
          <div class="mx-auto sm:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25">
          </div>
          <p class="pt-4 text-base font-bold flex items-center justify-center sm:justify-start">
            <svg
              class="h-4 fill-current text-green-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            Webエンジニア
          </p>
          <p class="pt-2 flex items-center justify-center sm:text-sm sm:justify-start">
            <svg
              class="h-4 fill-current text-green-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
            </svg>
            <a class="underline" href="https://github.com/Satjopg">
              Satjopg (Github)
            </a>
          </p>
          <p class="pt-8 text-sm">
            2017/04 ~ 2022/01 Yahoo株式会社でエンジニアとして従事. <br />
            主に飲食店予約サービスの開発・保守・運用を担当していた. <br />
            2022/10からは技術リーダーを拝命し 飲食店向けToBシステムの開発チームのマネージャーとして従事していた. <br />
            しかし、Webエンジニアとしてのキャリアの再考と自身のスキルや技術に対する考えの幅を広げるために <br />
            2022/02から<a
              class="underline"
              href="https://nukumo.link/"
              target="_blank"
              rel="noopener noreferrer"
            >
              一般社団法人nukumo
            </a>にジョインする. <br />
            nukumoでは技術選定、設計、実装まで幅広く担当している. <br />
            好きなことはテニスとゲームと漫画. 写真もたまに撮る. <br />
            最近はアウトドアとスノボにも熱を入れている (初心者です)
          </p>
        </div>
      </div>
      <div class="w-full sm:w-2/5">
        <img
          class="rounded-none sm:rounded-lg shadow-2xl hidden sm:block"
          src="/profile.jpg"
        />
      </div>
    </div>
  );
}
