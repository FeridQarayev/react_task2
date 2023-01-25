import React from "react";
import styled from "./home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function Home() {
  return (
    <div className={styled.home}>
      <div className={styled.home__container}>
        <div className={styled.home__container__carousel}>
          <Carousel>
            <div>
              <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
              <p className="legend">Get your Education today!</p>
            </div>
            <div>
              <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>

        <div className={styled.home__container__courses}>
          <div className={styled.home__container__courses__container}>
            <div className={styled.home__container__courses__container__up}>
              <div
                className={styled.home__container__courses__container__up__col}
              >
                <div
                  className={
                    styled.home__container__courses__container__up__col__text
                  }
                >
                  <h1>Popular Courses</h1>
                </div>
              </div>
            </div>
            <div className={styled.home__container__courses__container__down}>
              <div
                className={
                  styled.home__container__courses__container__down__box
                }
              >
                <div
                  className={
                    styled.home__container__courses__container__down__box__card
                  }
                >
                  <img
                    src="https://preview.colorlib.com/theme/course/images/course_1.jpg.webp"
                    alt="logo"
                  />
                  <div
                    className={
                      styled.home__container__courses__container__down__box__card__text
                    }
                  >
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__text__title
                      }
                    >
                      <a href="#9">A complete guide to design</a>
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__text__subtitle
                      }
                    >
                      Adobe Guide, Layes, Smart Objects etc...
                    </div>
                  </div>
                  <div
                    className={
                      styled.home__container__courses__container__down__box__card__down
                    }
                  >
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__left
                      }
                    >
                      <img
                        src="https://preview.colorlib.com/theme/course/images/author.jpg.webp"
                        alt="bilinmir"
                      />
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__middle
                      }
                    >
                      Michael Smith,
                      <span>Author</span>
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__right
                      }
                    >
                      <span>$29</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  styled.home__container__courses__container__down__box
                }
              >
                <div
                  className={
                    styled.home__container__courses__container__down__box__card
                  }
                >
                  <img
                    src="https://preview.colorlib.com/theme/course/images/course_2.jpg.webp"
                    alt="logo"
                  />
                  <div
                    className={
                      styled.home__container__courses__container__down__box__card__text
                    }
                  >
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__text__title
                      }
                    >
                      <a href="#9">Beginners guide to HTML</a>
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__text__subtitle
                      }
                    >
                      Adobe Guide, Layes, Smart Objects etc...
                    </div>
                  </div>
                  <div
                    className={
                      styled.home__container__courses__container__down__box__card__down
                    }
                  >
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__left
                      }
                    >
                      <img
                        src="https://preview.colorlib.com/theme/course/images/author.jpg.webp"
                        alt="bilinmir"
                      />
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__middle
                      }
                    >
                      Michael Smith,
                      <span>Author</span>
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__right
                      }
                    >
                      <span>$29</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  styled.home__container__courses__container__down__box
                }
              >
                <div
                  className={
                    styled.home__container__courses__container__down__box__card
                  }
                >
                  <img
                    src="https://preview.colorlib.com/theme/course/images/course_3.jpg.webp"
                    alt="logo"
                  />
                  <div
                    className={
                      styled.home__container__courses__container__down__box__card__text
                    }
                  >
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__text__title
                      }
                    >
                      <a href="#9">Advanced Photoshop</a>
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__text__subtitle
                      }
                    >
                      Adobe Guide, Layes, Smart Objects etc...
                    </div>
                  </div>
                  <div
                    className={
                      styled.home__container__courses__container__down__box__card__down
                    }
                  >
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__left
                      }
                    >
                      <img
                        src="https://preview.colorlib.com/theme/course/images/author.jpg.webp"
                        alt="bilinmir"
                      />
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__middle
                      }
                    >
                      Michael Smith,
                      <span>Author</span>
                    </div>
                    <div
                      className={
                        styled.home__container__courses__container__down__box__card__down__right
                      }
                    >
                      <span>$29</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styled.home__container__register}>
          <div className={styled.home__container__register__container}>
            <div className={styled.home__container__register__container__body}>
              <div
                className={
                  styled.home__container__register__container__body__left
                }
              >
                <div
                  className={
                    styled.home__container__register__container__body__left__content
                  }
                >
                  <div
                    className={
                      styled.home__container__register__container__body__left__content__div
                    }
                  >
                    <h1>
                      Register now and get a discount
                      <br />
                      <span>50%</span>
                      discount until 1 January
                    </h1>
                    <p>
                      In aliquam, augue a gravida rutrum, ante nisl fermentum
                      nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                      malesuada, finibus tortor fermentum. Aliquam, augue a
                      gravida rutrum, ante nisl fermentum nulla, vitae tempo.
                    </p>
                    <div
                      className={
                        styled.home__container__register__container__body__left__content__div__btn
                      }
                    >
                      <a href="#12">register now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  styled.home__container__register__container__body__right
                }
              >
                <div
                  className={
                    styled.home__container__register__container__body__right__content
                  }
                >
                  <div
                    className={
                      styled.home__container__register__container__body__right__content__back
                    }
                  ></div>
                  <div
                    className={
                      styled.home__container__register__container__body__right__content__search
                    }
                  >
                    <h1>Search for your course</h1>
                    <form>
                      <input
                        id="search_form_name"
                        type=""
                        name=""
                        value=""
                        placeholder="Course Name"
                      />
                      <input
                        id="search_form_category"
                        type=""
                        name=""
                        value=""
                        placeholder="Category"
                      />
                      <input
                        id="search_form_degree"
                        type=""
                        name=""
                        value=""
                        placeholder="Degree"
                      />
                      <button type="sumbit">search course</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styled.home__container__events}>
          <div className={styled.home__container__events__container}>
            <div className={styled.home__container__events__container__up}>
              <div>
                <div>
                  <h1>Upcoming Events</h1>
                </div>
              </div>
            </div>
            <div className={styled.home__container__events__container__down}>
              <div
                className={styled.home__container__events__container__down__row}
              >
                <div
                  className={
                    styled.home__container__events__container__down__row__col
                  }
                >
                  <div
                    className={
                      styled.home__container__events__container__down__row__col__body
                    }
                  >
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__left
                      }
                    >
                      <div
                        className={
                          styled.home__container__events__container__down__row__col__body__left__div
                        }
                      >
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__left__text1
                          }
                        >
                          07
                        </div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__left__text2
                          }
                        >
                          January
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__middle
                      }
                    >
                      <div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__middle__text1
                          }
                        >
                          <a href="#9">Student Festival</a>
                        </div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__middle__text2
                          }
                        >
                          Grand Central Park
                        </div>
                        <p>
                          In aliquam, augue a gravida rutrum, ante nisl
                          fermentum nulla, vitae tempor nisl ligula vel nunc.
                          Proin quis mi malesuada, finibus tortor.
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__right
                      }
                    >
                      <div>
                        <img
                          src="https://preview.colorlib.com/theme/course/images/event_1.jpg.webp"
                          alt="fghfjfdg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styled.home__container__events__container__down__row}
              >
                <div
                  className={
                    styled.home__container__events__container__down__row__col
                  }
                >
                  <div
                    className={
                      styled.home__container__events__container__down__row__col__body
                    }
                  >
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__left
                      }
                    >
                      <div
                        className={
                          styled.home__container__events__container__down__row__col__body__left__div
                        }
                      >
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__left__text1
                          }
                        >
                          07
                        </div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__left__text2
                          }
                        >
                          January
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__middle
                      }
                    >
                      <div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__middle__text1
                          }
                        >
                          <a href="#9">Open day in the Univesrsity campus</a>
                        </div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__middle__text2
                          }
                        >
                          Grand Central Park
                        </div>
                        <p>
                          In aliquam, augue a gravida rutrum, ante nisl
                          fermentum nulla, vitae tempor nisl ligula vel nunc.
                          Proin quis mi malesuada, finibus tortor.
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__right
                      }
                    >
                      <div>
                        <img
                          src="https://preview.colorlib.com/theme/course/images/event_2.jpg.webp"
                          alt="fghfjfdg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styled.home__container__events__container__down__row}
              >
                <div
                  className={
                    styled.home__container__events__container__down__row__col
                  }
                >
                  <div
                    className={
                      styled.home__container__events__container__down__row__col__body
                    }
                  >
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__left
                      }
                    >
                      <div
                        className={
                          styled.home__container__events__container__down__row__col__body__left__div
                        }
                      >
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__left__text1
                          }
                        >
                          07
                        </div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__left__text2
                          }
                        >
                          January
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__middle
                      }
                    >
                      <div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__middle__text1
                          }
                        >
                          <a href="#9">Student Graduation Ceremony</a>
                        </div>
                        <div
                          className={
                            styled.home__container__events__container__down__row__col__body__middle__text2
                          }
                        >
                          Grand Central Park
                        </div>
                        <p>
                          In aliquam, augue a gravida rutrum, ante nisl
                          fermentum nulla, vitae tempor nisl ligula vel nunc.
                          Proin quis mi malesuada, finibus tortor.
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        styled.home__container__events__container__down__row__col__body__right
                      }
                    >
                      <div>
                        <img
                          src="https://preview.colorlib.com/theme/course/images/event_3.jpg.webp"
                          alt="fghfjfdg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
