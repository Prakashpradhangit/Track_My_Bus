window.addEventListener('load', () => {

    const From = localStorage.getItem('From')
    const to = localStorage.getItem('To')


    if (From == 'bpd' && to == 'bbs') {
        document.getElementById('From').innerText = "Baripada"
        document.getElementById('To').innerText = "Bhubaneswar"
    }
    else if (From == 'bls' && to == 'bbs') {
        document.getElementById('From').innerText = "Balasore"
        document.getElementById('To').innerText = "Bhubaneswar"
    }



    document.getElementById('searchmore').addEventListener('click', () => (
        location.replace('index.html')
    ))


    async function fetchData() {
        try {

            const res = await fetch("data.json")
            const data = await res.json();

            var out = ""
            data.map(e => {
                f = e.from;
                t = e.to;

                if (f == From && t == to) {


                    out +=
                        `
                       
                    
                        <li class="card">

                        <div class="businfo">
                            <!-- FIXME: bus info -->
                            <div class="text">
                                <div class="title"><i class="fas fa-bus-alt"></i> ${e.name}</div>
                                <div class="sub-title"><i class="fas fa-info-circle"></i> ${e.info}</div>
                            </div>
    
                            <!-- FIXME: route info -->
                            <div class="route">
                                <div class="from"> ${e.fromName}</div>
                                <div class="arrow"><i class="fas fa-route"></i></i></div>
                                <div class="to"> ${e.toName}</div>
                            </div>
                            
                            <!-- FIXME: price -->
                            <div class="price">
                                <div class="cut"> <del><small><sup>${e.price + 35}</sup></small></del></div>
                                <i class="fas fa-rupee-sign"><i>${e.price}</i></i>
                            </div>
                        </div>
    
                        <!-- FIXME: other info -->
                        <div class="otherinfo">
                        
                        <div class="seat">
                        <img src="/img/seat.svg"/>   
                        <strong>${e.seat}</strong>
                    </div>
                            <div class="time-taken"><i class="fas fa-hourglass-half"></i> ${e.totTime}</div>
                            <div class="time">
                                <div class="start"> <i class="far fa-clock"></i> ${e.start}</div>
                                <div class="end"> ${e.end}</div>
                            </div>
                        </div>

                       
                    <div class="call">
                    <a href="tel:+917008061293">
                        <i class="fas fa-headset"></i>
                         Book now!
                    </a>
                    </div>
    
                    </li>                
 

                   `

                }

            })

            //console log
            console.log('Your Bus time table')

            document.getElementById('output').innerHTML = out;
        }
        catch (error) {
            console.error(error)
        }

    }

    fetchData()

})


