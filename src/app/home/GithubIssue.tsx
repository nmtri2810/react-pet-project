import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '~/components/ProjectCard'
import { fetchIssues } from '~/redux/GithubIssueReducer'
import { AppDispatch, RootState, useAppDispatch } from '~/redux/store'

const GithubIssue: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const githubIssueList = useSelector((state: RootState) => state.githubIssue.issues)
  const loading = useSelector((state: RootState) => state.githubIssue.loading)
  const error = useSelector((state: RootState) => state.githubIssue.error)

  useEffect(() => {
    dispatch(fetchIssues())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className='home_page mt-5 w-screen'>
      <Box sx={{ ml: '5rem', mr: '5rem' }}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>
          Github Issue Tracker
        </Typography>
        <Box sx={{ ml: '1rem', mt: '3rem' }}>
          <Typography variant='h5'>Opened issue</Typography>
          {githubIssueList?.map((issue: string) => {
            return <ProjectCard issueTitle={issue} />
          })}
        </Box>
      </Box>
    </div>
  )
}

export default GithubIssue
