export function GetPostSection(id, title, image_url) {
  let newDiv = document.createElement('div');
  newDiv.id = id;
  newDiv.className = "widget widget-introduction widget-introduction-introduction-1";

  let post = `
            <div data-ux="Widget" role="region" id="${id}"
              class="x-el x-el-div x-el c1-1 c1-2 c1-3 c1-5v c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
              <div>
                <section data-ux="Section"
                  class="x-el x-el-section c1-1 c1-2 c1-3 c1-i c1-j c1-82 c1-83 c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                  <div data-ux="SplitLayout" data-aid="SPLIT_LAYOUT_RENDERED"
                    class="x-el x-el-div x-el c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-3c c1-3d c1-t c1-u c1-2h c1-b c1-c c1-d c1-84 c1-85 c1-e c1-f c1-g">
                    <div data-ux="Grid"
                      class="x-el x-el-div c1-1 c1-2 c1-13 c1-3j c1-3k c1-75 c1-14 c1-76 c1-86 c1-77 c1-b c1-c c1-78 c1-79 c1-87 c1-7b c1-d c1-e c1-f c1-g">
                      <div data-ux="GridCell"
                        class="x-el x-el-div c1-1 c1-2 c1-3j c1-3o c1-3p c1-88 c1-2h c1-3l c1-7c c1-89 c1-7d c1-8a c1-b c1-c c1-7h c1-7i c1-8b c1-7k c1-d c1-8c c1-8d c1-8e c1-e c1-f c1-g">
                        <div data-ux="Block"
                          class="x-el x-el-div c1-1 c1-2 c1-8f c1-8g c1-q c1-b c1-c c1-d c1-8h c1-8i c1-e c1-f c1-g">
                          <picture
                            class="x-el x-el-picture c1-1 c1-2 c1-4 c1-5n c1-21 c1-8j c1-18 c1-b c1-c c1-d c1-e c1-f c1-g">
                            <img data-ux="Image"
                              src="${image_url}"
                              class="x-el x-el-img c1-1 c1-2 c1-4 c1-2h c1-3c c1-3d c1-14 c1-16 c1-4p c1-8k c1-5n c1-8l c1-8m c1-b c1-c c1-d c1-e c1-f c1-g" />
                          </picture>
                        </div>
                      </div>
                      <div data-ux="GridCell"
                        class="x-el x-el-div c1-1 c1-2 c1-3j c1-3o c1-3p c1-88 c1-2h c1-3l c1-7c c1-89 c1-7d c1-b c1-c c1-7h c1-7i c1-8b c1-7k c1-d c1-8c c1-8d c1-e c1-f c1-g">
                        <div data-ux="Block" class="x-el x-el-div c1-1 c1-2 c1-4 c1-5n c1-b c1-c c1-d c1-e c1-f c1-g">
                          <div data-ux="VerticalBox"
                          class="x-el x-el-div x-el c1-1 c1-2 c1-5n c1-2z c1-13 c1-3b c1-9u c1-5w c1-5f c1-9v c1-8v c1-b c1-c c1-9w c1-d c1-56 c1-57 c1-58 c1-59 c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                          <div data-ux="Group" class="x-el x-el-div c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                            <h2 role="heading" aria-level="2" data-ux="HeadingMajor" data-aid="SECTION_TITLE_RENDERED"
                              data-typography="HeadingEpsilon"
                              class="x-el x-el-h2 c1-25 c1-26 c1-1g c1-1h c1-7g c1-17 c1-15 c1-14 c1-16 c1-5f c1-3l c1-1b c1-3m c1-1c c1-27 c1-7i c1-2l c1-2m c1-18 c1-2n c1-a9 c1-7l c1-7m c1-7n c1-7o c1-2o c1-2p c1-2q c1-2r c1-2s c1-2t c1-2u">
                              ${title} </h2>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
          `
  newDiv.innerHTML = post
  return newDiv
}