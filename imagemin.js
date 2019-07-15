const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/images/**/*.{jpg,png,gif,svg}'], {
  plugins: [
    imageminMozjpeg({ quality: 80 }),
    imageminPngquant({ quality: [.7, .85] }),
    imageminGifsicle(),
    imageminSvgo()
  ],
  replaceOutputDir: output => {
    return output.replace(/images\//, '../public/images/')
  //  return output.replace(/images\//, '../../public/images/') // MAMP上で、htdocs内にディレクトリを切った場合、想定より一階層上になったので書き換える
  }
}).then(() => {
  console.log('Images optimized');
});