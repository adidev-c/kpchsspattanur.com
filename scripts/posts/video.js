export function GetYtVideoSection(id, title, description, link_id) {
  let newDiv = document.createElement('div');
  newDiv.id = id;
  newDiv.className = "widget widget-video widget-video-video-1";
  let video = `
    <div id="${id}" class="widget widget-video widget-video-video-1">
          <div data-ux="Widget" role="region" id="${id}"
            class="x-el x-el-div x-el c1-1 c1-2 c1-3 c1-b c1-c c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
            <div>
              <section data-ux="Section"
                class="x-el x-el-section c1-1 c1-2 c1-3 c1-i c1-j c1-b c1-c c1-m c1-n c1-d c1-e c1-f c1-g">
                <div data-ux="SectionContainer"
                  class="x-el x-el-div c1-1 c1-2 c1-3c c1-3d c1-t c1-u c1-2h c1-b c1-c c1-69 c1-d c1-6a c1-6v c1-6w c1-e c1-6b c1-f c1-6c c1-g">
                  <div data-ux="Intro"
                    class="x-el x-el-div x-el c1-1 c1-2 c1-6x c1-21 c1-b c1-c c1-d c1-6y c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                    <h1 role="heading" aria-level="1" data-ux="SectionHeading" data-aid="VIDEO_SECTION_TITLE_RENDERED"
                      data-promoted-from="2" data-order="0" data-typography="HeadingBeta"
                      class="x-el x-el-h1 c1-25 c1-26 c1-1g c1-1h c1-6z c1-17 c1-15 c1-14 c1-16 c1-21 c1-27 c1-36 c1-70 c1-2m c1-37 c1-2q c1-38 c1-39 c1-3a">
                      <span data-ux="Element" class="">${title}</span>
                    </h1>
                    <div data-ux="Grid"
                      class="x-el x-el-div c1-1 c1-2 c1-13 c1-3j c1-3k c1-75 c1-14 c1-76 c1-16 c1-77 c1-b c1-c c1-78 c1-79 c1-7a c1-7b c1-d c1-e c1-f c1-g">
                      <div data-ux="GridCell"
                        class="x-el x-el-div c1-1 c1-2 c1-3j c1-3o c1-3p c1-3q c1-2h c1-3l c1-7c c1-3m c1-7d c1-b c1-c c1-7e c1-7f c1-7g c1-7h c1-7i c1-7j c1-7k c1-d c1-7l c1-7m c1-7n c1-e c1-f c1-g">
                        <div data-ux="Text" data-aid="VIDEO_DESCRIPTION_RENDERED" data-typography="BodyAlpha"
                          class="x-el c1-1 c1-2 c1-1g c1-1h c1-5j c1-14 c1-16 c1-7o c1-7p c1-b c1-70 c1-c c1-2m c1-d c1-x c1-e c1-f c1-g x-rt">
                          <p style="margin:0"><span>${description}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-ux="Block" class="x-el x-el-div c1-1 c1-2 c1-q c1-b c1-c c1-d c1-e c1-f c1-g">
                    <div data-ux="Video"
                      class="x-el x-el-div x-el c1-1 c1-2 c1-4 c1-b c1-c c1-7w c1-7x c1-d c1-e c1-f c1-g c1-1 c1-2 c1-b c1-c c1-d c1-e c1-f c1-g">
                      <div data-ux="Block"
                        class="x-el x-el-div c1-1 c1-2 c1-13 c1-5v c1-7y c1-b c1-c c1-d c1-e c1-f c1-g">
                        <div data-ux="EmbedContainer"
                          class="x-el x-el-div c1-1 c1-2 c1-q c1-7z c1-5v c1-2h c1-80 c1-1c c1-1b c1-4 c1-b c1-c c1-d c1-e c1-f c1-g">
                          <iframe data-ux="Embed" allowfullscreen="" type="text/html" frameBorder="0"
                            src="https://youtube.com/embed/${link_id}?rel=0&amp;showinfo=0&amp;start=0&amp;autoplay=0&amp;loop=0&amp;muted=0&amp;controls=1"
                            data-aid="VIDEO_IFRAME_RENDERED"
                            class="x-el x-el-iframe c1-1 c1-2 c1-2y c1-5m c1-81 c1-30 c1-4 c1-5n c1-1k c1-1l c1-1m c1-1n c1-13 c1-5v c1-7y c1-b c1-c c1-d c1-e c1-f c1-g"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        `
  newDiv.innerHTML = video
  return newDiv
}