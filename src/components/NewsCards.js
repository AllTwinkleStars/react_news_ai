import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

import NewsCard from './NewsCard';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
  },
});

const skeletons = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'Donald Trump, BitCoin, PlayStation 5, Smartphones...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'ABC News, Wired, BBC, Time, IGN, Buzzfeed, CNN...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid style={{ padding: '0 5%', width: '100%', margin: 0 }} container alignItems="stretch" spacing={3}>
          {skeletons.map((skeleton) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <div className={classes.card} style={{ backgroundColor: skeleton.color }}>
                <Typography variant="h5" component="h5">{skeleton.title}</Typography>
                {skeleton.info ? <Typography variant="h6" component="h6"><strong>{skeleton.title.split(' ')[2]}</strong>: <br />{skeleton.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{skeleton.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid style={{ padding: '0 5%', width: '100%', margin: 0 }} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
