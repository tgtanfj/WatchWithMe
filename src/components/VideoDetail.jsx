import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Video } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null)
  const { id } = useParams()

  const { snippet: { title, channelId, channelTitle }, statistics: {
    viewCount, likeCount } } = videoDetail;

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ sx: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www/youtube.com/watch?v=${id}`}
              classname="react-player" controls
            />
            <Typography color="#fff" variant="h5" fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack></Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail