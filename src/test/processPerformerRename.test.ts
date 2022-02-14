import { Rhum } from "../../dev_deps/rhum.ts";
import processPerformerRename from '../processPerformerRename.ts';

Rhum.testPlan("default test plan", () => {
  Rhum.testSuite("processPerformerRename() ", () => {
    Rhum.testCase("no rename if not needed", () => {
      Rhum.asserts.assertEquals(
        processPerformerRename(
          ['ccc', 'bbb', 'eee', 'aaa'],
        ),
        ['ccc', 'bbb', 'eee', 'aaa']
      );
    });

    Rhum.testCase("renames 1", () => {
      Rhum.asserts.assertEquals(
        processPerformerRename(
          ['ccc', 'bbb', 'eee', 'aaa'],
          {'aaa': 'A. A. A.'}
        ),
        ['ccc', 'bbb', 'eee', 'A. A. A.']
      );
    });

    Rhum.testCase("renames 2", () => {
      Rhum.asserts.assertEquals(
        processPerformerRename(
          ['ccc', 'bbb', 'eee', 'aaa'],
          {'aaa': 'A. A. A.', 'bbb': 'BbB'}
        ),
        ['ccc', 'BbB', 'eee', 'A. A. A.']
      );
    });
  });
});

Rhum.run();
