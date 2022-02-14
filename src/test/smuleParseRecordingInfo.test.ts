import { Rhum } from "../../dev_deps/rhum.ts";
import smuleParseRecordingInfo from '../smuleParseRecordingInfo.ts';

Rhum.testPlan("default test plan", () => {
  Rhum.testSuite("parseSmuleRecordingInfo()", () => {
    Rhum.testCase("case 1: Duncan Laurence - Arcade", () => {

      const description = `Duncan Laurence - Arcade recorded by DuncanLaurence and evi_kimberly on Smule. Sing with lyrics to your favorite karaoke songs. | Smule Social Singing Karaoke app`;

      Rhum.asserts.assertEquals(smuleParseRecordingInfo(description), {
        description,
        originalPerformer: "Duncan Laurence",
        performers: [ "DuncanLaurence", "evi_kimberly" ],
        song: "Arcade"
      });
    });

    Rhum.testCase("case 2: Billie Eilish - I Love You", () => {

      const description = `Billie Eilish - I Love You recorded by Bpeff and amKae on Smule. Sing with lyrics to your favorite karaoke songs. | Smule Social Singing Karaoke app`;

      Rhum.asserts.assertEquals(smuleParseRecordingInfo(description), {
        description,
        originalPerformer: "Billie Eilish",
        performers: [ "Bpeff", "amKae" ],
        song: "I Love You"
      });
    });

    Rhum.testCase("case 3: join link: Bts Jungkook - STAY ALIVE", () => {

      const description = `Sing Bts Jungkook - STAY ALIVE and join MaiYP on Smule. Sing with lyrics to your favorite karaoke songs. | Smule Social Singing Karaoke app`;

      Rhum.asserts.assertEquals(smuleParseRecordingInfo(description, 'arukatora'), {
        description,
        originalPerformer: "Bts Jungkook",
        performers: [ "arukatora", "MaiYP" ],
        song: "STAY ALIVE"
      });
    });
  });
});

Rhum.run();
