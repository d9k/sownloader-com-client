import { Rhum } from "../../dev_deps/rhum.ts";
import sownloaderParseUrls from '../sownloaderParseUrls.ts';

Rhum.testPlan("default test plan", () => {
  Rhum.testSuite("sownloaderParseUrls()", () => {
    Rhum.testCase("case 1: join url, audio only", () => {

      const sownloaderHtml = `<div class="heading-text text-light text-center">
  <div class="row top-buffer">
    <div class="col-xs-12 col-sm-3 col-md-4">
      <img class="img-fluid sownloader-web-thumbnail" src="https://c-cl.cdn.smule.com/smule-gg-uw1-s-4/sing_google/performance/cover/6d/e9/e6827708-1ba0-48cb-990b-a202c8daf634.jpg" alt="STAY ALIVE" title="STAY ALIVE">
    </div>
    <div class="col-xs-12 col-sm-9 col-md-8">
      <h4><a href="https://smule.com/p/678185379_4282861577" target="_blank">STAY ALIVE</a></h4><h4>
      <p>× @arukatora 🌭🤏🏻✨🪐</p>
      
      <div class="row">
                        
        <div class="col-md-12">
          <a class="btn btn-block" href="/system/modules/downloader.php?url=https://c-cl.cdn.smule.com/smule-gg-uw1-r-2/sing_google/performance/rendered/ce/f9/0fbf45f6-4134-4895-b262-80d950e1e970.m4a&amp;name=STAY ALIVE&amp;ext=m4a&amp;pkey=678185379_4282861577"><i class="fa fa-music"></i> Download audio</a>
        </div>
        
        <div class="col-md-12">
          <a class="btn btn-block" href="/system/modules/downloader.php?url=https://c-cl.cdn.smule.com/smule-gg-uw1-r-2/sing_google/performance/rendered/ce/f9/0fbf45f6-4134-4895-b262-80d950e1e970.m4a&amp;name=STAY ALIVE&amp;ext=mp3&amp;pkey=678185379_4282861577"><i class="fa fa-music"></i> Download as MP3 (BETA)</a>
        </div>
                       
        <div class="col-12 another-song">
          <a href="/index.php">Download another song</a>
        </div>
      </div>
    </h4></div>
  </div>
</div>`;

      Rhum.asserts.assertEquals(sownloaderParseUrls(sownloaderHtml), {
        m4a: `https://c-cl.cdn.smule.com/smule-gg-uw1-r-2/sing_google/performance/rendered/ce/f9/0fbf45f6-4134-4895-b262-80d950e1e970.m4a`,
      });
    });

    Rhum.testCase("case 2: audio and video", () => {
      const sownloaderHtml = `<div class="col-xs-12 col-sm-9 col-md-8">
    <h4><a href="https://smule.com/p/2344899399_4269062677" target="_blank">Abcdefu - GAYLE</a></h4><h4>
    <p> @Kajjsa1993 🔝 🔥 #Abcdefu #Gayle 🔥 🔝 #SingTogether #DuetOfTheWeek #MusicVideo #SmuleGlobal #Popular </p>
    <div class="row">
      <div class="col-md-12">
        <a class="btn btn-block" href="/system/modules/downloader.php?url=https://c-cl.cdn.smule.com/smule-gg-uw1-r-4/sing_google/performance/rendered/4a/47/da02d740-b7f1-4f92-9ae6-ae7e799c6930.m4a&amp;name=Abcdefu - GAYLE&amp;ext=m4a&amp;pkey=2344899399_4269062677"><i class="fa fa-music"></i> Download audio</a>
      </div>
      
      <div class="col-md-12">
        <a class="btn btn-block" href="/system/modules/downloader.php?url=https://c-cl.cdn.smule.com/smule-gg-uw1-r-4/sing_google/performance/rendered/4a/47/da02d740-b7f1-4f92-9ae6-ae7e799c6930.m4a&amp;name=Abcdefu - GAYLE&amp;ext=mp3&amp;pkey=2344899399_4269062677"><i class="fa fa-music"></i> Download as MP3 (BETA)</a>
      </div>

      <div class="col-md-12">
        <a class="btn btn-block" href="/system/modules/downloader.php?url=https://c-cl.cdn.smule.com/smule-gg-uw1-r-4/sing_google/performance/renvideo/21/96/fac39787-f5e0-4847-be00-8d4b74aae857.mp4&amp;name=Abcdefu - GAYLE&amp;ext=mp4&amp;pkey=2344899399_4269062677"><i class="fa fa-video"></i> Download video</a>
      </div>
      <div class="col-12 another-song">
        <a href="/index.php">Download another song</a>
      </div>
    </div>
  </h4>
</div>`;

      Rhum.asserts.assertEquals(sownloaderParseUrls(sownloaderHtml), {
        m4a: `https://c-cl.cdn.smule.com/smule-gg-uw1-r-4/sing_google/performance/rendered/4a/47/da02d740-b7f1-4f92-9ae6-ae7e799c6930.m4a`,
        video: `https://c-cl.cdn.smule.com/smule-gg-uw1-r-4/sing_google/performance/renvideo/21/96/fac39787-f5e0-4847-be00-8d4b74aae857.mp4`,
      });

    });
  });
});

Rhum.run();
