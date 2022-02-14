# sownloader-com-client

Disclaimer: for education purpose only! Don't try to break the copyright law!

Unfortunately Smule server answers "418 I'm a teapot" http error messages if you try to download several Smule recordings in a row from one ip address.

So this [Deno](https://deno.land/) script heavily relies on sownloader.com service to download Smule recordings and on linkpreview.net to parse proper id3 tags.

<!-- and on the peekalink.io API to properly name them -->

Thanks to original project https://github.com/hansengianto/smuledownloader for inspiration.

## Installation

Install [velociraptor scripts runner](https://velociraptor.run/docs/installation/)

```
deno install --allow-all --name vr https://deno.land/x/velociraptor/cli.ts
vr upgrade
```

install script as `sownloader-com-client`:

```
vr inst
```

[ffmpeg](https://www.ffmpeg.org/download.html) with libmp3lame is required!

## Running

`sownloader-com-client SMULE_RECORDING_URL`

## Config

Edit `~/.sownloader-com-client` (it's created after the first run).
To avoid getting "418 I'm a teapot" http errors register at peekalink.io and fill `linkPreviewNetApiKey` value.

## Running tests

`vr test`

## Update dependencies

First, install [deno-udd](https://github.com/hayd/deno-udd):

```
deno install --allow-all --name udd https://deno.land/x/udd/main.ts
```

Then run

```
vr up
```
