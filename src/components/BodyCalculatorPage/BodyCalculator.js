import "./BodyCalculator.scss";
export const BodyCalculator = () => {
  return (
    <div className="body-calculator">
      <div className="body-calculator__calculate">
        <img className="calculate-image" src="https://img.freepik.com/free-vector/abstract-colorful-low-poly-triangle-shapes_361591-3185.jpg" />
        <div className="calculate-content">
          <div className="paragraph">
            <div className="calculate-content__intro">
              <h1 className="text-title">Body Mass Index Calculator</h1>
              <p className="text-desc">Better understand your weight in relation to your height using our body mass index (IBM) calculator. While BMI is not the sole
                determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being
              </p>
            </div>
            <div className="calculate-content__form">
              <h2 className="form__title">Enter your details below</h2>
              <div className="form__checkbox">
                <div className="male">
                  <input type="radio" id="metric" name="fav_language" value="Metric" />
                  <label for="metric">Metric</label>
                </div>
                <div className="female">
                  <input type="radio" id="imperial" name="fav_language" value="Imperial" />
                  <label for="imperial">Imperial</label>
                </div>
              </div>
              <div className="form__inputs">
                <div className="input-height">
                  <span className="title"> Height</span>
                  <input id="height" placeholder="cm" type="text" />
                </div>
                <div className="input-weight">
                  <span className="title"> Weight</span>
                  <input id="weight" placeholder="kg" type="text" />
                </div>
              </div>
              <div className="form__welcome">
                <p className="title">Welcome!</p>
                <p className="desc">Enter your height and your weight you will see your IBM reult here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body-calculator__ibm-intro">
        <div className="intro-image">
          <img className="image" src="https://static.vecteezy.com/system/resources/previews/011/490/381/non_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg" />
        </div>
        <div className="intro-desc">
          <p className="desc-title">What your BMI result means</p>
          <p className="desc-content">A BMI range of 18.5 to 24.9 is considered a healthy weight
            A BMI range of 18.5 to 24.9 is considered a healthy weight
            A BMI range of 18.5 to 24.9 is considered a healthy weight
            A BMI range of 18.5 to 24.9 is considered a healthy weight
          </p>
        </div>

      </div>
      <div className="body-calculator__ibm-include">
        <div className="container">
          <div className="ibm-include__eating">
            <svg className="icon-eat" viewBox="0 0 512 512" enable-background="new 0 0 512 512" id="Eat_x5F_healthy" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <path d="M427.15,321.527l-9.68-2.512c-8.391,32.34-30.418,59.493-60.435,74.498l4.472,8.945    C394.109,386.162,418.035,356.663,427.15,321.527z" />
              <rect height="10" width="412.301" x="39.773" y="438.592" />
              <path d="M61.349,269.521c0.61-3.155,1.201-6.113,1.775-8.91l27.626,10.164l3.453-9.385l-28.971-10.659    c3.848-17.277,6.834-26.508,9.324-33.269c2.747-7.471,8.241-13.425,15.471-16.765s15.326-3.664,22.801-0.912    c7.474,2.747,13.429,8.241,16.769,15.471c3.339,7.229,3.665,15.326,0.918,22.797c-0.354,0.961-0.875,2.236-1.543,3.781    l-24.287-8.936l-3.453,9.385l23.566,8.671c-3.68,7.752-8.733,17.861-14.478,28.753H44.028v10.276c0,2.789,0.083,5.611,0.247,8.387    c3.286,55.857,39.079,102.594,88.316,122.271H39.773v10h144.914H307.16h144.914v-10h-92.832    c51.851-20.741,88.576-71.488,88.576-130.658v-0.803c6.387-1.023,12.441-3.518,17.771-7.359    c9.082-6.547,15.072-16.236,16.869-27.285c1.799-11.052-0.816-22.14-7.361-31.219c-4.643-6.444-10.971-11.298-18.09-14.226    c2.516-3.598,4.116-7.826,4.517-12.239c0.226-2.44,0.093-4.913-0.397-7.36c-2.788-13.709-16.211-22.601-29.925-19.816    c-2.371,0.482-4.632,1.291-6.729,2.389c-0.038-0.242-0.064-0.484-0.105-0.727c-2.291-13.404-9.663-25.115-20.761-32.974    c-22.909-16.224-54.745-10.785-70.97,12.124c-2.607,3.682-4.666,7.651-6.183,11.786c-22.618-5.498-45.822,7.82-52.305,30.39    c-2.821,9.81-2.113,20.349,1.993,29.675l9.152-4.029c-3.166-7.189-3.711-15.316-1.535-22.883    c2.485-8.651,8.19-15.817,16.064-20.177c7.416-4.104,15.919-5.256,24.115-3.302c-1.756,11.153,0.173,22.821,5.89,32.974    l8.714-4.906c-7.729-13.727-6.844-30.898,2.256-43.748c6.314-8.917,15.725-14.842,26.496-16.682    c10.77-1.84,21.614,0.624,30.532,6.94c8.917,6.315,14.843,15.725,16.683,26.496c1.84,10.771-0.625,21.615-6.94,30.532l8.161,5.779    c5.342-7.542,8.463-16.192,9.199-25.167c2.184-2.388,5.053-4.037,8.264-4.69c8.313-1.685,16.444,3.701,18.131,11.996    c0.298,1.484,0.379,2.984,0.242,4.467c-0.361,3.987-2.332,7.725-5.359,10.313c-4.188-0.528-8.48-0.451-12.742,0.332l1.806,9.836    c12.091-2.222,24.538,2.781,31.714,12.743c10.285,14.269,7.037,34.252-7.242,44.546c-5.333,3.843-11.617,5.914-18.178,5.997    h-54.949c15.001-21.899,27.654-23.056,27.793-23.065l-0.102,0.004l-0.283-9.996c-2.039,0.058-20.069,1.501-39.301,33.057h-2.493    c0.177-1.618,0.292-3.249,0.318-4.89c0.22-14.246-5.161-27.68-15.151-37.826c-9.993-10.149-23.338-15.738-37.578-15.738    c-8.902,0-17.713,2.263-25.484,6.548c-2.287,1.267-4.703,2.464-7.177,3.556c-12.704,5.6-26.124,7.855-38.81,6.517    c-1.05-0.11-2.121-0.162-3.2-0.179c-11.666-9.75-24.873-18.125-35.125-24.041c-0.207-11.178,0.781-22.445,2.956-33.505    l1.173-5.965h-6.079c-2.805,0-9.972,0.643-15.925,6.596c-0.568,0.569-1.097,1.166-1.596,1.782    c-0.499-0.616-1.028-1.213-1.596-1.782c-5.954-5.954-13.12-6.596-15.925-6.596h-6.079l1.172,5.964    c2.175,11.061,3.162,22.327,2.956,33.5c-8.509,4.908-19.052,11.506-29.053,19.179c0.958-7.362-0.161-14.86-3.351-21.765    c-2.262-4.896-5.424-9.192-9.291-12.72c2.214-1.435,4.339-3.118,6.206-4.693c7.187-6.067,15.523-14.998,23.473-25.147    c7.949-10.146,14.622-20.377,18.79-28.808c3.449-6.977,7.373-16.773,1.642-21.268c-4.668-3.657-12.391-0.604-23.03,9.068    c0.147-1.354,0.262-2.677,0.334-3.955c0.839-14.938-3.91-19.886-8.042-21.406c-7.307-2.688-15.471,4.152-22.723,14.995    c-1.785-14.83-5.724-22.456-11.77-22.702c-7.224-0.291-10.635,9.711-12.53,17.26c-2.291,9.122-3.84,21.237-4.363,34.115    c-0.524,12.882,0.035,25.087,1.576,34.365c0.411,2.476,0.955,5.217,1.747,7.807c-5.075,0.235-10.108,1.45-14.86,3.645    c-9.656,4.46-16.994,12.413-20.662,22.389c-3.408,9.253-7.694,22.86-13.642,53.614L61.349,269.521z M135.655,251.35    c3.734-3.563,7.827-7.003,12.058-10.26c-6.521,10.758-11.022,23.285-11.022,36.57c0,0.684,0.025,1.365,0.039,2.048h-15.118    C127.463,268.466,132.326,258.557,135.655,251.35z M209.648,263.936h-18.305v10h16.871c-0.004,1.946,0.137,3.874,0.438,5.772    h-33.693c-0.007-0.683-0.018-1.364-0.018-2.048c0-23.114,6.359-42.402,11.505-53.146v1.44h0.01l-0.001-1.458    c1.585-3.308,3.057-5.815,4.189-7.359c3.063,4.017,8.67,14.923,12.36,31.692l9.767-2.148c-1.939-8.815-4.701-17.331-7.886-24.416    c7.942,4.581,17.732,10.682,27.013,17.683c-7.458,2.783-13.921,8.007-18.253,15.003    C211.899,257.759,210.564,260.787,209.648,263.936z M146.73,279.708c-0.016-0.683-0.039-1.363-0.039-2.048    c0-19.793,11.818-35.992,18.863-43.886c3.433-3.847,6.832-7.016,9.984-9.567c-0.634,1.505-1.23,3.01-1.782,4.476    c-3.292,8.744-8.814,26.734-8.814,48.977c0,0.684,0.011,1.365,0.018,2.048H146.73z M437.818,289.984    c0,72.046-58.613,130.658-130.658,130.658H184.687c-69.085,0-126.376-53.966-130.429-122.859    c-0.152-2.581-0.229-5.205-0.229-7.799v-0.276h383.79V289.984z M295.379,273.983c0-13.557,11.033-24.585,24.596-24.585    c13.557,0,24.586,11.029,24.586,24.585c0,1.947-0.251,3.858-0.697,5.725h-47.785C295.63,277.846,295.379,275.935,295.379,273.983z     M291.193,240.508c2.75-1.214,5.438-2.546,7.978-3.954c6.289-3.467,13.429-5.3,20.647-5.3c11.539,0,22.354,4.53,30.453,12.754    c8.096,8.222,12.456,19.109,12.277,30.652c-0.027,1.698-0.165,3.385-0.389,5.048h-8.08c0.313-1.882,0.48-3.792,0.48-5.725    c0-19.07-15.516-34.585-34.586-34.585c-19.076,0-34.596,15.515-34.596,34.585c0,1.935,0.167,3.845,0.481,5.725h-67.029    c-0.471-2.116-0.681-4.292-0.615-6.502c0.136-4.581,1.492-9.067,3.926-12.983c4.599-7.428,12.474-12.106,21.065-12.514    c1.389-0.066,2.765-0.028,4.091,0.112C261.719,249.338,276.895,246.811,291.193,240.508z M199.218,187.853    c0.844-0.844,1.739-1.495,2.627-1.997c-1.104,7.384-1.713,14.829-1.832,22.257c-1.779-0.942-3.283-1.717-4.462-2.314v-9.092    C195.551,193.362,196.853,190.218,199.218,187.853z M179.256,185.856c0.888,0.502,1.783,1.153,2.627,1.997    c2.365,2.365,3.667,5.509,3.667,8.854v9.091c-1.179,0.596-2.688,1.374-4.462,2.313C180.97,200.684,180.361,193.24,179.256,185.856    z M171.836,128.219c-1.868,5.882-8.187,18.215-20.645,34.118c-3.06,3.906-5.997,7.396-8.768,10.494    c2.425-4.853,4.638-10.01,6.542-15.185c1.521-4.131,2.826-8.24,3.934-12.257C161.658,135.672,168.161,130.453,171.836,128.219z     M145.295,111.546c2.119,2.02,3.503,17.597-5.713,42.646c-9.218,25.051-20.369,36.016-23.291,36.18    c-2.119-2.02-3.504-17.597,5.713-42.647C131.222,122.674,142.373,111.71,145.295,111.546z M107.364,146.209    c0.819-20.184,4.002-33.671,6.391-39.361c1.39,4.2,3.015,12.729,3.324,26.47l0.055-0.001c-1.639,3.573-3.155,7.26-4.515,10.955    c-2.134,5.8-3.96,11.837-5.317,17.71C107.133,157.28,107.127,152.017,107.364,146.209z" />
              <rect height="10" transform="matrix(-0.9385 -0.3453 0.3453 -0.9385 89.3033 479.6154)" width="14.076" x="80.33" y="226.854" />
              <path d="M450.381,262.348c-3.604,2.595-8.002,3.63-12.387,2.919l-1.604,9.87c1.446,0.235,2.894,0.352,4.33,0.352    c5.538,0,10.923-1.727,15.505-5.025c5.771-4.156,9.578-10.312,10.721-17.332c1.141-7.02-0.52-14.064-4.675-19.835l-8.115,5.844    c2.596,3.604,3.632,8.003,2.919,12.386C456.361,255.909,453.984,259.752,450.381,262.348z" />
              <path d="M364.225,166.188l2.764-9.611c-11.462-3.293-23.472,3.35-26.768,14.813c-3.295,11.464,3.351,23.471,14.814,26.767    l2.762-9.611c-6.164-1.772-9.736-8.229-7.965-14.393C351.604,167.989,358.061,164.416,364.225,166.188z" />
              <polygon points="189.816,99.758 199.816,99.758 199.816,87.37 212.205,87.37 212.205,77.37 199.816,77.37 199.816,64.981     189.816,64.981 189.816,77.37 177.428,77.37 177.428,87.37 189.816,87.37   " />
              <polygon points="306.871,144.48 316.871,144.48 316.871,132.092 329.26,132.092 329.26,122.092 316.871,122.092 316.871,109.703     306.871,109.703 306.871,122.092 294.482,122.092 294.482,132.092 306.871,132.092   " />
              <polygon points="41.376,186.861 51.376,186.861 51.376,174.473 63.765,174.473 63.765,164.473 51.376,164.473 51.376,152.084     41.376,152.084 41.376,164.473 28.987,164.473 28.987,174.473 41.376,174.473   " />
            </svg>
            <p className="eating-title">Healthy eating</p>
            <p className="eating-content">Healthy eating promotes weight control,
              disease prevention, better digestion, immunity, mental clarity, and mood
            </p>
          </div>
          <div className="ibm-include__excercise">
            <svg className="icon-exercise" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><title /><path class="cls-1" d="M11.67,37.36h-3a1,1,0,0,1-1-1V27.64a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v8.72A1,1,0,0,1,11.67,37.36Zm-2-2h1V28.64h-1Z" /><path class="cls-1" d="M15.67,39.59h-4a1,1,0,0,1-1-1V25.41a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V38.59A1,1,0,0,1,15.67,39.59Zm-3-2h2V26.41h-2Z" /><path class="cls-1" d="M22.32,42H15.67a1,1,0,0,1-1-1V23a1,1,0,0,1,1-1h6.65a1,1,0,0,1,1,1V41A1,1,0,0,1,22.32,42Zm-5.65-2h4.65V24H16.67Z" /><path class="cls-1" d="M55.33,37.36h-3a1,1,0,0,1-1-1V27.64a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v8.72A1,1,0,0,1,55.33,37.36Zm-2-2h1V28.64h-1Z" /><path class="cls-1" d="M52.32,39.59h-4a1,1,0,0,1-1-1V25.41a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V38.59A1,1,0,0,1,52.32,39.59Zm-3-2h2V26.41h-2Z" /><path class="cls-1" d="M48.32,42H41.67a1,1,0,0,1-1-1V23a1,1,0,0,1,1-1h6.65a1,1,0,0,1,1,1V41A1,1,0,0,1,48.32,42Zm-5.65-2h4.65V24H42.67Z" /><path class="cls-1" d="M41.67,35H22.32a1,1,0,0,1-1-1V30a1,1,0,0,1,1-1H41.67a1,1,0,0,1,1,1V34A1,1,0,0,1,41.67,35ZM23.32,33H40.67V31H23.32Z" /></svg>
            <p className="exercise-title">Regular exercise</p>
            <p className="exercise-content">Exercise improves fitness. aids weight control,
              elevates mood, and reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
          <div className="ibm-include__sleep">
            <svg className="icon-sleep" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" >
              <path class="duotone_twee" d="M21.234,5.331c0.056,0.119,0.209,0.233,0.34,0.253c1.857,0.283,1.788,0.089,0.438,1.468
              c-0.087,0.089-0.143,0.263-0.122,0.386c0.319,1.95,0.492,1.843-1.172,0.926c-0.12-0.066-0.316-0.066-0.437,0
              c-1.664,0.916-1.492,1.027-1.172-0.926c0.02-0.123-0.035-0.297-0.122-0.386c-1.353-1.382-1.415-1.186,0.438-1.468
              c0.131-0.02,0.284-0.134,0.34-0.253C20.602,3.556,20.398,3.556,21.234,5.331z M24.542,11.688c-0.132,0.28-0.491,0.547-0.797,0.594
              c-0.995,0.151-0.899,0.258-0.267,0.902c0.217,0.221,0.353,0.652,0.303,0.957c-0.15,0.916-0.194,1.083,0.725,0.576
              c0.272-0.15,0.716-0.15,0.987,0c0.92,0.507,0.875,0.34,0.725-0.576c-0.05-0.305,0.086-0.736,0.303-0.957
              c0.631-0.645,0.728-0.751-0.267-0.902c-0.307-0.047-0.665-0.314-0.797-0.594C25.012,10.743,24.962,10.797,24.542,11.688z"/>
              <path class="duotone_een" d="M18.724,21.056c-4.031-0.453-7.322-3.742-7.778-7.772c-0.106-0.935-0.061-1.842,0.109-2.705
              c0.076-0.385-0.318-0.692-0.679-0.538c-3.42,1.456-5.734,5.006-5.329,9.041c0.412,4.102,3.77,7.46,7.872,7.872
              c4.036,0.406,7.585-1.909,9.041-5.329c0.154-0.361-0.153-0.755-0.538-0.679C20.561,21.115,19.656,21.16,18.724,21.056z"/>
            </svg>
            <p className="sleep-title">Adequate sleep</p>
            <p className="sleep-content">Sleep enhances mental clarity, emotional stability, adn physical wellness, promoting overall
              restoration and rejuvenation
            </p>
          </div>
        </div>
      </div>
      <div className="body-calculator__ibm-limit">
        <div className="ibm-limit__desc">
          <div className="paragraph">
            <p className="desc-title">Limitation of IBM</p>
            <p className="desc-content">
              Although BMI is often a practical indicator of healthy weight,  it is not
              suited for every person. Specific groups should carefully consider their BMI outcomes,
              and in certain cases the measurement may not be beneficial to use.
            </p>
          </div>

          <div className="container">
            <div className="info__gender">
              <div className="header">
                <svg className="icon-gender" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                  <path d="M211.9209,23.21582c-.02246-.11328-.06519-.21777-.09693-.32715a3.96647,3.96647,0,0,0-.13012-.41943,3.94126,3.94126,0,0,0-.19385-.36817c-.05811-.10693-.10522-.21777-.17383-.31982a3.99291,3.99291,0,0,0-.49316-.604l-.0044-.00537h0a4.00638,4.00638,0,0,0-.61035-.49854c-.09814-.06543-.20434-.11035-.30664-.1665a2.33028,2.33028,0,0,0-.78784-.32715c-.11377-.03321-.22266-.07715-.34033-.10059A3.99092,3.99092,0,0,0,208,20H168a4,4,0,0,0,0,8h30.34326L164.38574,61.95752A63.97641,63.97641,0,1,0,116,171.8623V200H88a4,4,0,0,0,0,8h28v24a4,4,0,0,0,8,0V208h28a4,4,0,0,0,0-8H124V171.8623A63.94175,63.94175,0,0,0,169.79688,67.85986L204,33.65674V64a4,4,0,0,0,8,0V24.00146A4.03032,4.03032,0,0,0,211.9209,23.21582ZM120,164a56,56,0,1,1,56-56A56.06322,56.06322,0,0,1,120,164Z" />
                </svg>
                <p className="gender-title">Gender</p>
              </div>
              <p className="gender-content">
                The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are
                considered when evaluating their BMI.
              </p>
            </div>
          </div>
        </div>

        <div className="ibm-limit__info">
          <div className="container">
            <div className="info__age">
              <div className="header">
                <svg className="icon-age" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><defs></defs><line class="a" x1="23.9995" y1="19.53" x2="23.9995" y2="15.06" /><path class="a" d="M24,15.06c8.6059-2.98,0-10.43,0-10.43S15.0583,12.08,24,15.06Z" /><path class="a" d="M30.3325,26.608a6.3335,6.3335,0,0,1-12.667,0" /><path class="a" d="M17.6665,26.608a6.3329,6.3329,0,0,1-6.2029,6.3326A6.4312,6.4312,0,0,1,5,26.4776V24a4.4517,4.4517,0,0,1,4.4333-4.47H38.53A4.4517,4.4517,0,0,1,43,23.9631c0,.0125,0,.0249,0,.0373v2.4772a6.4312,6.4312,0,0,1-6.4637,6.463,6.3329,6.3329,0,0,1-6.2029-6.3326" /><path class="a" d="M40.3915,31.692V41.88a1.49,1.49,0,0,1-1.49,1.49H9.0973a1.49,1.49,0,0,1-1.49-1.49h0V31.692" /><path class="a" d="M23.9994,34.7527l.9029,1.83,2.019.2933L25.46,38.3l.3449,2.0109-1.8058-.9494-1.8058.9494L22.5384,38.3l-1.4609-1.4241,2.0189-.2933Z" /></svg>
                <p className="age-title">Age</p>
              </div>
              <p className="age-content">In Aging individuals, increased body fat and muscle loss
                may cause BMT to underestimate body fat content
              </p>
            </div>
          </div>
          <div className="container">

            <div className="info__muscle">
              <div className="header">
                <svg className="icon-muscle" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                  <path d="M504.396,181.31c-60.018,0-104.368,38.809-116.491,50.638c-48.276-11.705-78.346,7.199-95.212,25.461
                  c-8.824,9.554-14.916,19.801-18.905,28.012c-2.417-3.758-5.416-7.89-9.048-12.021c-15.922-18.111-36.483-27.683-59.461-27.683
                  c-19.439,0-34.921,6.011-46.858,13.867l36.531-83.644l3.674,7.229c1.297,2.552,3.917,4.159,6.779,4.159h54.409h21.17h87.626
                  c4.199,0,7.604-3.405,7.604-7.604v-49.834c0-1.172-0.273-2.277-0.746-3.269l3.147-3.549c1.751-1.975,2.353-4.717,1.589-7.245
                  l-25.306-83.748c-0.969-3.209-3.927-5.405-7.279-5.405h-33.744H273.69h-17.157h-33.744h-40.186c-1.822,0-3.583,0.654-4.964,1.843
                  l-48.998,42.215c-0.759,0.655-1.382,1.452-1.831,2.347L0.809,323.895C0.277,324.953,0,326.123,0,327.308v62.444
                  c0,2.24,0.987,4.367,2.7,5.81c2.745,2.317,68.201,56.728,154.144,56.728c72.853,0,132.633-23.857,149.947-31.517l62.326,62.325
                  c1.425,1.427,3.36,2.227,5.376,2.227h129.902c4.199,0,7.604-3.405,7.604-7.604V188.914C512,184.715,508.595,181.31,504.396,181.31
                  z M361.009,172.119L361.009,172.119h-80.023h-13.566v-14.28h3.018h27.085h13.101h33.744c2.176,0,4.246-0.932,5.69-2.559
                  l10.951-12.35V172.119z M341.974,41.883l22.445,74.278l-23.472,26.471h-13.418l17.343-19.559c1.751-1.975,2.353-4.717,1.589-7.245
                  l-22.343-73.944H341.974z M308.23,41.883l22.445,74.278l-23.472,26.471h-9.68h-10.18l17.343-19.559
                  c1.752-1.975,2.353-4.717,1.59-7.245l-22.344-73.944H308.23z M377.642,470.118l-63.843-63.843
                  c-2.297-2.296-5.802-2.879-8.719-1.454c-0.66,0.322-66.961,32.261-148.238,32.261c-70.907,0-128.709-41.08-141.635-51.006v-56.967
                  L139.718,81.263l45.708-39.38h37.363h33.744h11.511l22.444,74.278l-23.472,26.471h-3.238h-32.582v-7.688
                  c0-7.647,6.22-13.867,13.867-13.867h12.362c2.527,0,4.888-1.255,6.302-3.349c1.414-2.094,1.695-4.753,0.751-7.097l-10.41-25.842
                  c-0.036-0.09-0.082-0.174-0.122-0.263c-0.011-0.024-0.022-0.049-0.033-0.072c-0.961-2.09-2.764-3.549-4.841-4.135
                  c-0.004-0.001-0.008-0.002-0.011-0.003c-0.223-0.063-0.449-0.116-0.678-0.158c-0.043-0.008-0.086-0.014-0.129-0.021
                  c-0.193-0.032-0.387-0.058-0.583-0.075c-0.075-0.007-0.15-0.01-0.226-0.015c-0.165-0.01-0.33-0.015-0.496-0.014
                  c-0.046,0-0.089-0.005-0.135-0.004c-1.685,0.044-27.537,0.022-44.504-0.002c-0.004,0-0.007,0-0.011,0
                  c-4.194,0-7.598,3.397-7.604,7.593c-0.006,4.199,3.393,7.609,7.593,7.615c2.78,0.004,19.39,0.027,31.636,0.027
                  c3.009,0,5.754-0.001,7.965-0.005l4.274,10.612h-1.101c-16.032,0-29.074,13.042-29.074,29.075v15.292
                  c0,4.199,3.405,7.604,7.604,7.604h28.619v14.28h-42.14l-8.86-17.43c-1.333-2.623-4.081-4.246-7.001-4.155
                  c-2.941,0.085-5.568,1.86-6.746,4.557l-61.49,140.791c-1.663,3.806,0.036,8.242,3.816,9.963c3.778,1.721,8.241,0.092,10.022-3.659
                  c0.196-0.413,20.106-41.261,65.468-41.261c44.66,0,61.662,43.43,62.358,45.262c1.156,3.088,4.168,5.088,7.463,4.931
                  c3.294-0.148,6.117-2.402,6.991-5.581c0.056-0.203,5.752-20.459,21.776-37.809c21.094-22.841,49.479-29.565,84.37-19.987
                  c2.746,0.754,5.681-0.089,7.608-2.184c0.433-0.47,42.212-45.148,100.948-48.801v273.361H377.642z"/>
                </svg>
                <p className="muscle-title">Muscle</p>
              </div>
              <p className="muscle-content">BMI may misclassify muscular individuals as overweight or
                obese, as it doesn't differentiate muscle from fat
              </p>
            </div>
          </div>
          <div className="container">

            <div className="info__pregnancy">
              <div className="header">
                <svg className="icon-pregnancy" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <g>
                    <path class="st0" d="M201.932,253.38c1.451,5.29,6.918,8.388,12.19,6.933c5.29-1.462,8.387-6.918,6.933-12.202
                    c-2.24-8.112-7.06-15.11-13.508-20.104c-6.448-4.986-14.611-7.975-23.378-7.975c-8.702,0-16.815,2.938-23.238,7.867
                    c-6.429,4.928-11.256,11.846-13.547,19.88c-1.505,5.268,1.549,10.753,6.817,12.259c5.269,1.498,10.761-1.556,12.259-6.824
                    c1.09-3.828,3.412-7.179,6.532-9.56c3.115-2.381,6.936-3.777,11.177-3.784c4.273,0.007,8.112,1.426,11.25,3.836
                    C198.542,246.115,200.865,249.515,201.932,253.38z"/>
                    <path class="st0" d="M311.928,253.22c1.093-3.835,3.423-7.178,6.535-9.567c3.122-2.381,6.944-3.777,11.184-3.784
                    c4.27,0.007,8.109,1.426,11.246,3.836c3.122,2.41,5.446,5.81,6.513,9.675c1.455,5.29,6.911,8.388,12.194,6.933
                    c5.287-1.462,8.384-6.918,6.926-12.202c-2.237-8.112-7.053-15.11-13.508-20.104c-6.444-4.986-14.608-7.975-23.371-7.975
                    c-8.706,0-16.818,2.938-23.241,7.867c-6.43,4.928-11.253,11.846-13.551,19.88c-1.505,5.26,1.541,10.746,6.81,12.252
                    C304.934,261.536,310.426,258.49,311.928,253.22z"/>
                    <path class="st0" d="M494.006,217.703c-10.063-10.066-23.722-16.666-38.829-17.774c-9.434-44.376-33.185-83.455-66.17-112.156
                    c-36.047-31.35-83.231-50.368-134.746-50.368c-51.443,0-98.569,18.96-134.583,50.216c-33.188,28.795-57.047,68.076-66.43,112.676
                    c-13.692,1.788-26.013,8.134-35.28,17.405C6.886,228.782,0,244.226,0,261.145c0,16.891,6.886,32.334,17.969,43.414
                    c11.076,11.08,26.519,17.969,43.436,17.969c1.168,0,2.297-0.029,3.433-0.087c14.792,35.142,39.054,65.319,69.604,87.312
                    c14.054,10.117,29.472,18.505,45.907,24.851c-1.979-6.94-3.003-14.227-3.003-21.653c0-3.423,0.224-6.853,0.68-10.196
                    c-9.52-4.537-18.562-9.914-27.037-16.008c-29.078-20.921-51.58-50.476-63.735-84.852l-4.392-12.411l-12.697,3.488
                    c-2.92,0.789-5.808,1.216-8.76,1.216c-9.176,0-17.365-3.684-23.379-9.69c-6.003-6.014-9.69-14.199-9.69-23.354
                    c0-9.184,3.686-17.375,9.69-23.382c6.014-6.006,14.202-9.69,23.379-9.69c0.571,0,1.422,0.058,2.616,0.137l13.17,1.021l1.962-13.026
                    c6.401-42.574,27.995-80.176,59.085-107.155c7.769-6.738,16.131-12.809,24.985-18.136c0.767,4.805,1.951,9.307,3.6,13.439
                    c2.609,6.564,6.278,12.252,10.613,17.108c7.61,8.518,17.126,14.517,27.066,19.43c14.922,7.331,31.046,12.412,44.6,18.744
                    c6.77,3.141,12.864,6.557,17.868,10.494c5.015,3.958,8.923,8.343,11.705,13.684c1.502,2.888,4.494,4.654,7.744,4.581
                    c3.256-0.079,6.158-1.983,7.523-4.943c14.694-31.842,19.995-56.896,19.999-76.572c0.022-13.432-2.511-24.294-6.072-32.848
                    c23.295,7.396,44.502,19.452,62.548,35.127c31.118,27.073,52.655,64.763,59.002,107.438l2.102,14.054l14.054-2.15
                    c1.87-0.29,3.517-0.427,5.014-0.427c9.184,0,17.34,3.684,23.379,9.69c6.011,6.007,9.665,14.198,9.69,23.382
                    c-0.025,9.154-3.679,17.339-9.69,23.354c-6.039,6.006-14.195,9.69-23.379,9.69c-3.796,0-7.428-0.688-10.938-1.896l-13.432-4.74
                    l-4.679,13.431c-12.017,34.606-34.487,64.393-63.622,85.473c-7.624,5.522-15.697,10.458-24.172,14.713
                    c0.597,3.879,0.876,7.794,0.876,11.781c0,6.89-0.876,13.635-2.577,20.126c15.165-6.232,29.422-14.199,42.477-23.665
                    c30.413-22.022,54.551-52.148,69.267-87.283c2.208,0.253,4.506,0.398,6.799,0.398c16.924,0,32.334-6.89,43.418-17.969
                    C505.082,293.48,512,278.036,512,261.145C512,244.226,505.082,228.782,494.006,217.703z M221.634,130.007
                    c-12.328-5.196-23.143-11-30.474-18.736c-3.691-3.879-6.586-8.214-8.641-13.46c-1.708-4.364-2.794-9.459-3.13-15.465
                    c11.134-5.204,22.879-9.307,35.128-12.115c0.058,9.625,2.298,24.692,11.879,42.798c4.277,8.12,10.016,16.818,17.625,25.937
                    C236.419,135.898,228.795,133.04,221.634,130.007z M286.679,156.638c-23.918-19.236-37.534-36.936-45.252-51.548
                    c-8.388-15.906-9.896-28.202-9.911-35.323c0-0.955,0.032-1.795,0.076-2.554c7.421-0.948,14.98-1.469,22.669-1.469
                    c10.41,0,20.596,0.934,30.507,2.648c1.02,1.187,2.088,2.548,3.148,4.147c4.476,6.788,8.988,17.448,9.021,34.339
                    C296.941,119.637,294.256,136.021,286.679,156.638z"/>
                    <path class="st0" d="M255.995,351.33c-16.97-0.007-32.475,6.926-43.584,18.056c-11.126,11.102-18.052,26.61-18.048,43.58
                    c-0.004,16.97,6.922,32.479,18.048,43.58c11.108,11.131,26.613,18.056,43.584,18.049c16.974,0.007,32.479-6.918,43.584-18.049
                    c11.134-11.101,18.056-26.61,18.052-43.58c0.004-16.97-6.918-32.478-18.052-43.58C288.474,358.256,272.969,351.323,255.995,351.33z
                    M284.667,425.074c-2.348,5.558-6.311,10.341-11.286,13.699c-4.99,3.358-10.888,5.298-17.386,5.304
                    c-4.335-0.007-8.391-0.875-12.1-2.446c-5.565-2.345-10.345-6.31-13.703-11.282c-3.358-4.986-5.294-10.891-5.301-17.383
                    c0-4.342,0.868-8.394,2.435-12.107c2.348-5.558,6.31-10.341,11.286-13.699c4.986-3.358,10.888-5.298,17.383-5.305
                    c4.342,0.007,8.391,0.876,12.104,2.439c5.569,2.352,10.349,6.318,13.706,11.29c3.358,4.979,5.294,10.891,5.298,17.383
                    C287.102,417.301,286.234,421.353,284.667,425.074z"/>
                    <path class="st0" d="M255.998,314.364c-41.854,0-75.809,20.292-75.809,45.339c0,7.483,3.036,14.546,8.424,20.777
                    c3.257-5.384,7.222-10.428,11.782-14.994c14.828-14.843,34.578-23.035,55.575-23.035c21.084,0,40.808,8.192,55.654,23.07
                    c4.563,4.531,8.507,9.574,11.764,14.959c5.388-6.231,8.416-13.294,8.416-20.777C331.804,334.657,297.882,314.364,255.998,314.364z"
                    />
                  </g>
                </svg>
                <p className="pregnancy-title">Pregnancy</p>
              </div>
              <p className="pregnancy-content">Expectant mothers experience weight gain due to their
                growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimiase health risks for both mother and child
              </p>
            </div>
          </div>
          <div className="container">
            <div className="info__race">
              <div className="header">
                <svg className="icon-race" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                  <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Transport" transform="translate(-816.000000, -48.000000)" fill-rule="nonzero">
                      <g id="run_fill" transform="translate(816.000000, 48.000000)">
                        <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">
                        </path>
                        <path d="M13,2 C14.6569,2 16,3.34315 16,5 C16,6.4374272 14.989097,7.63873126 13.6394248,7.93171632 L13.469,7.96356 L14.9049,10.261 L16.6286,9.57154 C17.1414,9.36643 17.7234,9.61584 17.9285,10.1286 C18.11895,10.6047714 17.9175097,11.1406102 17.4771844,11.3789437 L17.3714,11.4285 L15.6477,12.118 C14.8018647,12.4563529 13.842291,12.1788886 13.3046353,11.4607687 L13.2089,11.321 L13.0463,11.0609 L12.4403,13.4851 C12.38606,13.7019 12.298348,13.901548 12.184076,14.0798456 L12.0935,14.2095 L13.7468,15.4377 C14.1430667,15.7320111 14.4146519,16.1610383 14.5132351,16.6403612 L14.542,16.8223 L14.895,20 L15,20 C15.5523,20 16,20.4477 16,21 C16,21.51285 15.613973,21.9355092 15.1166239,21.9932725 L15,22 L14.0895,22 C13.5690357,22 13.1258286,21.63665 13.0156081,21.1386974 L12.9962,21.0215 L12.5542,17.0431 L9.40368,14.7028 C9.34671,14.6605 9.29553,14.6132 9.2503,14.5621 C8.69851333,14.1201667 8.40463653,13.4019169 8.52705735,12.6715064 L8.55972,12.5149 L9.35399,9.33785 L7.78454,9.80869 L6.94868,12.3162 C6.77404,12.8402 6.20772,13.1234 5.68377,12.9487 C5.19725429,12.7865714 4.9183499,12.2866153 5.0208232,11.7965565 L5.05132,11.6838 L5.88717,9.17623 C6.07583833,8.61021583 6.50617896,8.16080701 7.05678434,7.94578318 L7.20984,7.89304 L10.6474,6.86176 C10.2421,6.35022 10,5.70338 10,5 C10,3.34315 11.3431,2 13,2 Z M9.6,15.2 C10.0418,15.5314 10.1314,16.1582 9.8,16.6 L8.5838,18.2216 C8.10614,18.8585 7.21414,19.0113 6.55175,18.5697 L4.62197,17.2832 C4.22939,17.5957 3.65616,17.5704 3.29289,17.2071 C2.90237,16.8166 2.90237,16.1834 3.29289,15.7929 L3.7871,15.2987 C4.12753,14.9583 4.66094,14.9055 5.06152,15.1725 L7.26759,16.6432 L8.2,15.4 C8.53137,14.9582 9.15817,14.8686 9.6,15.2 Z" id="形状" fill="#d66c98">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="race-title">Race</p>
              </div>
              <p className="race-content">
                certain health concrens may affect individuals of some Black and Asian origins at lower BMIs than others.
                To learn more, it is advised to discuss this with your GP or practice nurse
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}