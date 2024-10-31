import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
    // A number specifying the number of VUs to run concurrently.
    vus: 100,
    // A string specifying the total duration of the test run.
    duration: '30s',
};

export default function () {
    const res = http.get('http://host.docker.internal:3000');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}
