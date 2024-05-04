import { JOB_CARD } from "../../types/JobCard"
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

function JobCard(jobInfo: JOB_CARD) {
  const button = {
    width: "100%",
    fontWeight: "600",
    marginTop: "1rem",
    borderRadius: "8px",
    padding: "1em",
    color: "black",
    backgroundColor: "turquoise",
  }

  const card = {
    borderRadius: '20px',
    padding: '1.5em',
    border: '1px solid gray',
  }

  const cardHeader = {
    display: 'flex', 
    width: 'fit-content',
    gap: '.75rem',
    alignItems: 'start',
    margin: 0, 
    padding: 0,
  }

  return (
    <Card style={card}>
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
            title={jobInfo.companyName}
            subheader={jobInfo.jobRole}
          />
          <Typography variant="body1" style={{ margin: 0, padding: 0, marginTop: '.8rem', textTransform: 'capitalize', fontWeight: 600, fontSize: '1rem' }}>
            {jobInfo.location}
          </Typography>
        </CardContent>
      </CardContent>

      <CardContent style={{ margin: 0, padding: 0, marginTop: '1rem' }}>
        <Typography variant="body2" style={{ color: 'rgb(77, 89, 106)', margin: '0 0 1rem 0', lineHeight: '1.43', fontSize: '1rem' }}>
          Estimated Salary: $12 - $16 LPA  ✅
        </Typography>
        <Typography variant="body2" style={{ color: 'black', fontWeight: 600, lineHeight: 1.5, fontSize: '1.2rem' }}>
          About Company: 
        </Typography>
        <Typography variant="body2" style={{ color: 'black', fontSize: '1rem' }}>
          { jobInfo.jobDescription }
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
    </Card>
  );
}

export default JobCard
