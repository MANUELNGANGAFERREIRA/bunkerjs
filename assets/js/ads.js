document.addEventListener('DOMContentLoaded', () => {
    const auth = '8d97ed55fa95dae67a5a8bc54f5a5be4c7b722aa'; // Seu token de autenticação
    const feedId = '8601897'; // ID do feed
    const varParam = '2717337'; // ID da fonte de tráfego

    const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A5341f Safari/604.1',
        'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A5341f Safari/604.1',
        'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    ];

    const ips = [
        '234.87.114.144',

        '170.137.136.94',

        '147.93.77.183',

        '240.31.196.48',

        '69.150.102.216',

        '188.24.202.162',

        '67.30.69.3',

        '0.131.223.121',

        '173.208.187.89',

        '87.182.104.9',

        '98.85.209.54',

        '80.67.87.79',

        '124.185.16.5',

        '205.169.243.96',

        '113.203.167.232',

        '195.102.99.106',

        '111.186.11.123',

        '193.86.88.141',

        '216.106.230.244',

        '217.107.171.170',

        '113.253.48.19',

        '242.133.247.61',

        '159.177.110.67',

        '11.108.54.37',

        '81.68.49.21',

        '93.78.178.243',

        '153.36.142.183',

        '176.59.76.77',

        '67.173.153.65',

        '110.186.95.221',

        '61.78.217.175',

        '181.17.58.158',

        '1.20.203.214',

        '92.189.139.21',

        '237.242.202.134',

        '30.178.76.134',

        '181.196.142.122',

        '133.22.214.110',

        '98.124.219.84',

        '165.50.70.76',

        '89.40.207.56',

        '145.189.178.90',

        '156.120.105.70',

        '126.253.60.116',

        '31.35.180.111',

        '177.204.26.16',

        '250.145.90.1',

        '247.244.49.59',

        '70.103.98.200',

        '44.44.184.241',

        '28.225.45.22',

        '225.181.178.194',

        '118.14.15.20',

        '177.228.6.114',

        '207.177.169.15',

        '89.113.148.169',

        '138.84.90.70',

        '166.40.169.14',

        '107.145.182.208',

        '234.46.197.76',

        '57.53.69.206',

        '181.35.81.237',

        '243.160.105.165',

        '123.70.60.86',

        '158.230.29.229',

        '75.75.204.235',

        '50.143.68.50',

        '112.27.245.19',

        '118.208.93.69',

        '49.129.188.38',

        '226.131.105.206',

        '97.188.185.72',

        '208.222.68.72',

        '250.129.169.14',

        '151.4.24.65',

        '210.69.71.8',

        '117.136.108.174',

        '50.217.190.66',

        '139.206.71.50',

        '93.80.179.120',

        '248.190.135.152',

        '236.45.241.8',

        '20.231.234.238',

        '228.240.1.92',

        '7.96.34.222',

        '42.119.203.49',

        '218.119.201.220',

        '190.186.82.137',

        '19.39.53.241',

        '35.36.52.129',

        '218.185.214.175',

        '166.39.53.1',

        '118.104.23.130',

        '84.123.101.157',

        '107.153.62.154',

        '28.20.143.237',

        '228.113.64.79',

        '73.78.208.57',

        '221.152.155.106',

        '235.1.108.45',

        '230.85.189.54',

        '41.15.207.153',

        '140.39.10.188',

        '2.210.137.232',

        '99.50.45.149',

        '14.136.87.72',

        '147.189.164.12',

        '128.36.196.73',

        '37.121.229.170',

        '33.150.2.52',

        '131.126.90.98',

        '156.81.103.64',

        '149.149.5.197',

        '118.196.49.35',

        '73.91.153.132',

        '148.194.9.112',

        '160.4.175.111',

        '110.145.92.211',

        '55.20.246.65',

        '30.171.44.73',

        '223.142.4.164',

        '214.105.188.253',

        '100.31.186.64',

        '141.220.165.35',

        '11.165.131.39',

        '100.112.18.41',

        '26.137.211.168',

        '204.255.83.236',

        '136.66.204.75',

        '9.231.212.154',

        '228.4.237.47',

        '116.246.9.216',

        '137.98.74.209',

        '186.161.95.25',

        '182.36.77.5',

        '132.174.21.2',

        '33.88.30.220',

        '157.171.175.43',

        '66.247.143.117',

        '148.193.193.44',

        '40.20.87.244',

        '180.28.200.238',

        '31.249.139.16',

        '192.171.242.118',

        '128.88.80.89',

        '161.167.246.203',

        '142.22.48.72',

        '13.171.37.113',

        '31.197.120.63',

        '145.231.13.179',

        '166.167.130.178',

        '113.170.146.57',

        '50.36.139.44',

        '189.85.40.251',

        '133.180.91.251',

        '61.107.224.177',

        '145.123.34.92',

        '242.68.162.182',

        '83.14.64.205',

        '225.169.57.24',

        '209.197.187.234',

        '63.138.189.133',

        '56.178.178.177',

        '175.246.178.198',

        '13.193.176.222',

        '204.73.97.232',

        '164.104.139.190',

        '57.114.253.51',

        '11.18.95.187',

        '179.99.40.151',

        '25.78.105.76',

        '130.246.173.33',

        '214.157.230.188',

        '112.0.94.83',

        '218.245.158.105',

        '54.209.116.66',

        '215.25.66.57',

        '252.207.217.205',

        '71.140.126.105',

        '145.74.60.243',

        '172.11.48.116',

        '80.126.203.37',

        '103.29.113.138',

        '73.5.213.64',

        '167.231.102.240',

        '200.93.251.145',

        '198.9.51.78',

        '53.168.150.237',

        '164.131.0.237',

        '244.205.65.18',

        '18.254.246.90',

        '214.8.29.28',

        '88.134.255.174',

        '69.58.20.57',

        '75.125.231.130',

        '16.108.135.91',

        '24.156.146.106',

        '45.30.167.230',

        '103.240.233.32',

        '183.155.163.62',

        '132.200.109.155',

        '24.81.78.181',

        '57.60.122.2',

        '178.150.206.65',

        '200.254.140.136',

        '253.42.155.242',

        '247.231.211.29',

        '97.32.236.155',

        '165.70.137.143',

        '159.28.67.85',

        '202.96.49.18',

        '14.32.105.178',

        '70.211.150.2',

        '138.252.6.44',

        '189.178.126.195',

        '168.68.58.19',

        '97.119.201.151',

        '157.64.105.159',

        '194.76.83.146',

        '53.114.50.59',

        '23.13.151.66',

        '30.67.123.39',

        '180.144.162.29',

        '60.62.47.250',

        '148.91.218.214',

        '19.33.26.104',

        '189.254.120.8',

        '149.61.57.228',

        '65.20.115.192',

        '58.200.146.61',

        '114.212.42.16',

        '6.190.87.34',

        '202.54.163.125',

        '52.189.75.122',

        '148.77.31.210',

        '53.75.93.75',

        '39.142.231.83',

        '89.72.78.245',

        '180.235.110.131',

        '6.249.242.152',

        '66.60.177.3',

        '251.136.212.92',

        '43.254.85.255',

        '124.95.254.171',

        '108.172.36.250',

        '245.84.39.72',

        '12.85.125.186',

        '95.65.173.57',

        '232.181.185.122',

        '113.232.55.57',

        '207.9.39.197',

        '120.17.210.241',

        '165.148.176.185',

        '174.222.134.148',

        '51.46.86.219',

        '125.18.24.35',

        '25.82.159.233',

        '169.158.108.84',

        '134.4.120.107',

        '118.234.120.211',

        '167.103.212.235',

        '114.24.96.22',

        '183.96.15.58',

        '206.104.59.233',

        '171.145.78.17',

        '177.103.136.118',

        '224.191.137.117',

        '146.169.191.125',

        '34.124.178.14',

        '181.21.228.228',

        '16.120.149.186',

        '229.239.123.119',

        '31.197.83.60',

        '79.210.14.251',

        '58.42.158.155',

        '107.210.157.10',

        '138.41.44.129',

        '27.175.47.152',

        '216.207.43.4',

        '83.58.245.235',

        '81.46.125.92',

        '111.118.55.137',

        '75.182.42.40',

        '225.177.142.203',

        '152.78.91.206',

        '76.146.46.50',

        '56.173.190.38',

        '23.26.223.193',

        '193.233.211.81',

        '178.191.250.166',

        '84.0.220.50',

        '181.23.23.193',

        '80.93.90.251',

        '81.247.62.125',

        '0.41.73.36',

        '83.254.144.11',

        '237.213.114.81',

        '145.16.255.250',

        '25.188.193.97',

        '179.87.182.250',

        '167.65.187.232',

        '28.213.39.140',

        '5.209.126.20',

        '182.65.14.178',

        '2.139.112.25',

        '21.47.39.54',

        '47.99.27.234',

        '125.76.235.21',

        '158.116.25.165',

        '187.150.38.188',

        '108.1.246.62',

        '92.192.50.238',

        '232.42.32.224',

        '255.252.15.244',

        '157.170.198.6',

        '61.4.233.59',

        '108.13.159.92',

        '136.123.115.15',

        '156.43.202.103',

        '58.65.225.31',

        '253.8.18.38',

        '254.133.134.213',

        '103.54.33.102',

        '223.190.255.166',

        '205.184.72.106',

        '34.117.28.58',

        '228.4.103.6',

        '148.69.218.184',

        '103.118.23.186',

        '24.153.228.124',

        '71.27.49.41',

        '78.176.11.0',

        '92.249.27.113',

        '167.62.21.244',

        '114.147.129.143',

        '35.112.29.212',

        '176.192.156.184',

        '200.141.56.72',

        '77.140.7.126',

        '247.176.70.106',

        '50.100.143.77',

        '112.157.126.231',

        '219.227.188.31',

        '241.170.51.156',

        '4.108.132.86',

        '207.152.121.152',

        '124.12.94.37',

        '235.106.218.245',

        '46.27.237.20',

        '231.123.44.187',

        '124.209.150.119',

        '84.57.216.117',

        '34.41.133.75',

        '201.5.37.1',

        '70.180.13.161',

        '54.95.224.112',

        '14.113.152.211',

        '118.253.115.249',

        '39.92.197.109',

        '74.253.0.33',

        '196.65.101.45',

        '26.59.62.14',

        '76.141.29.133',

        '225.147.6.240',

        '170.33.39.122',

        '72.38.51.81',

        '139.56.66.71',

        '32.181.224.176',

        '164.86.73.73',

        '156.230.60.242',

        '107.45.188.134',

        '5.250.223.81',

        '173.15.240.25',

        '14.165.203.126',

        '117.174.105.222',

        '95.206.84.197',

        '187.44.94.57',

        '53.30.130.5',

        '226.23.173.144',

        '59.182.99.24',

        '75.60.52.85',

        '232.217.190.141',

        '13.22.136.3',

        '85.75.82.39',

        '17.213.84.204',

        '16.34.93.124',

        '163.191.92.186',

        '228.205.141.154',

        '247.189.167.10',

        '78.227.195.145',

        '116.29.162.170',

        '90.182.61.117',

        '157.174.167.157',

        '242.188.98.43',

        '206.137.227.58',

        '125.35.72.48',

        '69.96.96.61',

        '151.220.107.149',

        '102.87.72.142',

        '179.43.68.25',

        '147.204.188.209',

        '44.90.124.139',

        '39.9.151.117',

        '85.2.85.119',

        '91.102.166.147',

        '96.180.99.145',

        '42.36.80.210',

        '14.187.207.103',

        '212.200.202.243',

        '226.115.95.186',

        '87.218.83.46',

        '138.236.47.128',

        '250.19.0.241',

        '21.214.53.109',

        '214.122.20.15',

        '73.42.96.91',

        '217.82.238.204',

        '217.239.193.2',

        '248.232.48.0',

        '234.141.142.51',

        '130.222.210.84',

        '199.76.73.172',

        '215.3.157.138',

        '144.234.118.115',

        '214.223.50.27',

        '21.32.87.234',

        '35.137.20.86',

        '116.61.153.164',

        '226.171.23.3',

        '138.45.239.32',

        '86.82.3.238',

        '246.25.192.227',

        '60.68.3.158',

        '220.233.50.45',

        '187.138.216.75',

        '175.56.82.198',

        '198.220.62.228',

        '252.92.81.190',

        '37.240.156.94',

        '238.46.242.188',

        '57.245.51.101',

        '103.76.110.233',

        '88.113.6.12',

        '193.33.31.205',

        '174.92.10.242',

        '97.91.142.253',

        '48.160.238.55',

        '179.91.94.191',

        '63.150.178.165',

        '30.155.143.106',

        '30.148.253.91',

        '252.110.231.132',

        '1.205.134.187',

        '49.215.180.83',

        '53.234.210.35',

        '79.124.242.124',

        '189.131.119.158',

        '47.84.125.128',

        '20.226.176.167',

        '184.102.71.226',

        '41.248.187.152',

        '122.119.121.243',

        '5.19.160.48',

        '105.160.243.56',

        '135.98.121.89',

        '98.165.208.21',

        '241.247.142.79',

        '159.244.58.64',

        '241.52.90.50',

        '55.226.93.126',

        '41.98.227.253',

        '130.234.85.44',

        '18.29.91.123',

        '48.178.3.116',

        '144.243.59.22',

        '51.137.179.207',

        '19.23.185.166',

        '103.178.172.114',

        '115.137.89.235',

        '31.101.155.26',

        '238.34.167.66',

        '90.67.79.191',

        '242.93.40.47',

        '57.246.175.158',

        '173.9.97.108',

        '196.180.229.93',

        '47.16.128.174',

        '184.194.226.43',

        '124.232.160.233',

        '140.69.103.147',

        '27.85.101.30',

        '197.239.91.125',

        '143.109.106.227',

        '211.53.21.202',

        '40.212.199.6',

        '155.227.30.184',

        '117.6.211.20',

        '184.101.195.6',

        '222.217.122.64',

        '81.204.10.144'];

    // Selecionar IP e User Agent uma vez
    const ua = getRandomElement(userAgents);
    const ip = getRandomElement(ips);

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function simulateHumanBehavior() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, Math.random() * 5000); // Intervalo aleatório entre 0 e 5 segundos
        });
    }

    function setFakeCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getFakeCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    async function fetchAds() {
        for (let i = 0; i < 10; i++) {
            await simulateHumanBehavior();

            // Definir cookies falsos
            setFakeCookie('session_id', Math.random().toString(36).substring(2), 1);

            // Exibir IP e User Agent
            const infoDiv = document.getElementById('info');
            infoDiv.innerHTML = `IP: ${ip} | User Agent: ${ua}`;

            fetch(`http://offers.propellerads.com/api/v1/ads/${feedId}/?auth=${auth}&ua=${ua}&ip=${ip}&var=${varParam}`)
                .then(response => response.json())
                .then(data => {
                    const adsDiv = document.getElementById('ads');
                    data.ads.forEach(ad => {
                        const adContainer = document.createElement('div');
                        adContainer.className = 'ad-container';

                        const adIcon = document.createElement('img');
                        adIcon.className = 'ad-icon';
                        adIcon.src = ad.icon;
                        adContainer.appendChild(adIcon);

                        const adContent = document.createElement('div');
                        adContent.className = 'ad-content';

                        const adTitle = document.createElement('div');
                        adTitle.className = 'ad-title';
                        adTitle.textContent = ad.title;
                        adContent.appendChild(adTitle);

                        const adText = document.createElement('div');
                        adText.className = 'ad-text';
                        adText.textContent = ad.text;
                        adContent.appendChild(adText);

                        const adImage = document.createElement('img');
                        adImage.className = 'ad-image';
                        adImage.src = ad.image;
                        adContent.appendChild(adImage);

                        const adLink = document.createElement('a');
                        adLink.href = ad.click_url;
                        adLink.target = '_blank';
                        adLink.appendChild(adContainer);

                        adsDiv.appendChild(adLink);
                    });
                })
                .catch(error => console.error('Error:', error));
        }
    }

    fetchAds();
});
