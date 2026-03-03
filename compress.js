import zlib from 'zlib'

let data = "I want some Pizza"
zlib.gzip(data, (err, buffer) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Compressed data:", buffer.toString());
        zlib.gunzip(buffer, (err, result) => { 
            if (err) {
                console.log(err);
            } else {
                console.log("Decompressed data:", result.toString());
            }
        })
    }
})
