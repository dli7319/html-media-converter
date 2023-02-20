# html-media-converter
A web-based FFmpeg gui. \
Convert your media files to any format you want locally using [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm).


## Features
- [x] Convert media files to any container format
- [ ] Add trim input interface
- [ ] Add crop input interface

## Development
1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Deployment
1. Github automatically builds to the `dist` branch on every push to the `main` branch.
2. Serve the `dist` branch using a web server with the following headers:
    * `Cross-Origin-Embedder-Policy: require-corp`
    * `Cross-Origin-Opener-Policy: same-origin`
    * These headers are required for the ffmpeg.wasm which supports WebAssembly threads.