import { Box, styled } from "@mui/material";

export const OurStoryWrapperStyled = styled(Box)`
    .cmn_head{
        margin-bottom: 40px;
    }
    .ourStoryConent{
        .ourStoryImg{
            display: flex;
            float: left;
            max-width: 40%;
            margin: 0 30px 20px 0;
            @media (max-width: 599px) {
                max-width: initial;
                margin: 0 0 30px;
            }
        }
    }

    .ourStoryGallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 40px 0;
}

.ourStoryGallery figure {
  margin: 0;
  overflow: hidden;
  border-radius: 10px;
}

.ourStoryGallery img {
  width: 100%;
  height: 370px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.ourStoryGallery img:hover {
  transform: scale(1.05);
}
  @media (max-width: 991px) {
  .ourStoryGallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .ourStoryGallery {
    grid-template-columns: 1fr;
  }
}

`
