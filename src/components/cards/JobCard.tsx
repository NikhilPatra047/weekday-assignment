import { useState } from "react";
import { JOB_CARD } from "../../types/JobCard"
import { Button, Card, CardContent, CardHeader, CardMedia, Typography, styled } from "@mui/material";
import ViewModal from "../modals/ViewModal";

function JobCard(jobInfo: JOB_CARD) {
  const [viewMore, setViewMore] = useState<boolean>(false)
  const handleClose = () => {
    setViewMore(false)
  }

  const button = {
    width: "100%",
    fontWeight: "600",
    marginTop: "1rem",
    borderRadius: "8px",
    padding: "1em",
    color: "black",
    backgroundColor: "rgb(85, 239, 196)",
  }

  const StyledCard = styled(Card)`
    border-radius: 20px;
    padding: 1.5em; 
    box-shadow: 0 0 5px 0 rgb(0, 0, 0, 0.5); 
    transition: transform 300ms ease-in-out; 
    &:hover {
      transform: scale(1.02)
    }
  `;

  const cardHeader = {
    display: 'flex', 
    width: 'fit-content',
    gap: '.75rem',
    alignItems: 'start',
    margin: 0, 
    padding: 0,
  }

  const cardJobDescription = {
    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
    color: 'black', 
    fontSize: '1rem'
  }

  return (
    <>
    {
      viewMore && <ViewModal open={viewMore} handleClose={handleClose} jobDescription={jobInfo.jobDescription} />
    }
    <StyledCard>
      <CardContent style={cardHeader}>
        <CardMedia
          image={jobInfo.logo}
          style={{ height: '60px', width: '60px' }}
        />
        <CardContent style={{ margin: 0, padding: 0, }}>
          <CardHeader
            style={{ margin: 0, padding: 0 }}
            titleTypographyProps={{ 
              variant: 'h3', 
              fontWeight: '600', 
              fontSize: '1.2rem', 
              letterSpacing: '.1rem', 
              color: '#8b8b8b' 
            }}
            subheaderTypographyProps={{variant: 'h2', fontSize: '1.5rem', marginTop: '.5rem', color: 'black'}}
            title={<a className='title-anchor' href={jobInfo.link}>{jobInfo.companyName}</a>}
            subheader={jobInfo.jobRole}
          />
          <Typography variant="body1" style={{ margin: 0, padding: 0, marginTop: '.8rem', textTransform: 'capitalize', fontWeight: 600, fontSize: '1rem' }}>
            {jobInfo.location}
          </Typography>
        </CardContent>
      </CardContent>

      <CardContent style={{ margin: 0, padding: 0, marginTop: '1rem' }}>
        <Typography variant="body2" style={{ color: 'rgb(77, 89, 106)', margin: '0 0 1rem 0', lineHeight: '1.43', fontSize: '1rem' }}>
          {
            jobInfo.minPay === null 
            ? `Estimated Salary: upto $${jobInfo.maxPay}K ✅`
            : jobInfo.maxPay === null
              ? `Estimated Salary: upto $${jobInfo.minPay}K ✅`
              : `Estimated Salary: $${jobInfo.minPay}K - $${jobInfo.maxPay}K ✅`
          }
        </Typography>
        <Typography variant="body2" style={{ color: 'black', fontWeight: 600, lineHeight: 1.5, fontSize: '1.2rem' }}>
          About Company: 
        </Typography>
        <Typography variant="body2" style={cardJobDescription}>
          {jobInfo.jobDescription.substring(0, 500)}
        </Typography>
        <Typography style={{ width: 'fit-content', margin: '0 auto'}}>
          <Button onClick={() => setViewMore(!viewMore)} type="button" style={{ color: 'blue' }}>
            View More
          </Button>
        </Typography>
        <Typography variant="body1" style={{ margin: '1rem 0 0 0', color: '#8b8b8b', fontSize: '1rem', letterSpacing: '.1rem', fontWeight: 600 }}>
          Minimum Experience
        </Typography>
        <Typography variant="body2" style={{ marginTop: '.2rem', color: 'black', fontSize: '1rem' }}>
          { jobInfo.expRequired !== null? `${ jobInfo.expRequired } years`: 'Not Applicable' }
        </Typography>
        <Button type="button" style={button}>
          ⚡️ Easy Apply
        </Button>
      </CardContent>
    </StyledCard>
    </>
  );
}

export default JobCard
