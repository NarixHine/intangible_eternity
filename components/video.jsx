'use client'

import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function VideoPlayer({ src, ...props }) {
	const videoRef = useRef(null)
	const hlsRef = useRef(null)

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		if (video.canPlayType('application/vnd.apple.mpegurl')) {
			video.src = src
		} else if (Hls.isSupported()) {
			const hls = new Hls()
			hlsRef.current = hls
			hls.loadSource(src)
			hls.attachMedia(video)
		}
	}, [src, videoRef])

	useEffect(() => {
		const hls = hlsRef.current
		if (hls) {
			hls.on(Hls.Events.MANIFEST_PARSED, () => {
				const lowestQualityIndex = 0
				hls.currentLevel = lowestQualityIndex
			})
		}
	}, [])

	return <video ref={videoRef} {...props}/>
}