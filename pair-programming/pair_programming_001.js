export const SeparateJobs = (jobs) => {

const containers = [];
let paper = [];
let total_paper = 0;
let added_rolls = false;

jobs.forEach(job => {
    let types = job.paper_type.split(',');

    types.forEach(type => {
        const [paper, qty] = type.trim().split(' ');

        if (paper.trim() != 'Star') {
            const quantity = parseInt(qty.trim().replace(/[()]/g, ''));

            total_paper += quantity / 600;

            total_paper += !added_rolls ? Math.abs(job.star_rolls) : 0;

            added_rolls = true;

    } else if (types.length === 1 && paper.trim() == 'Star') { // if job only contains star rolls
        total_paper += Math.abs(job.star_rolls);
    }
})



paper.push(job);

const sum = Math.ceil(total_paper);

// console.log({paper,total_paper});

if (sum >= 6 || paper.length >= 12) {

    // console.log("inside sum >= 6")

    if (sum > 4 && sum < 8) {  // must split into multiple boxes

        const sum2 = sum % 4;

        let box_size = BOX_SIZES.find(size => size.rolls === sum2);

        box_size = box_size ? box_size.size : 'NA';

        // console.log('inside sum > 4 && sum < 8');

        containers.push([...paper, {box: `${BOX_SIZES[3].size} | ${box_size}`}])  // given we should be able to fit 4 into one box

    } else if (sum > 8) {

        const [whole, remainder] = (sum / 4).toString().split('.');

        const box_size = parseInt(whole) > 1 ? `${BOX_SIZES[3].size} | `.repeat(parseInt(whole)) : BOX_SIZES[3].size;

        // console.log('inside sum > 8')

        containers.push([...paper, {box: remainder ? `${box_size}${BOX_SIZES[0].size}` : box_size}])  // given we should be able to fit 4 into one box

    } else {  // can use a single box

        // console.log('inside else');

        let box_size = BOX_SIZES.find(size => size.rolls === sum);

        box_size = box_size ? box_size.size : 'NA';

        containers.push([...paper, {box: box_size}]);
    }

paper = [];

total_paper = 0;
}

added_rolls = false;
})

    if (paper.length) {
        const sum = Math.ceil(total_paper);

            if (sum > 4 && sum < 8) {  // check if total paper is between 4 and 8

                const sum2 = sum % 4;

                let box_size = BOX_SIZES.find(size => size.rolls === sum2); // must split into multiple boxes

                box_size = box_size ? box_size.size : 'NA';

                containers.push([...paper, {box: `${BOX_SIZES[3].size} | ${box_size}`}])  // given we should be able to fit 4 into one box

    } else if (sum > 8) {
        const [whole, remainder] = (sum / 4).toString().split('.');

        const box_size = parseInt(whole) > 1 ?
            `${BOX_SIZES[3].size} | `.repeat(parseInt(whole)) :
            BOX_SIZES[3].size;

            containers.push([...paper, {box: remainder ? `${box_size}${BOX_SIZES[0].size}` : box_size}])  // given we should be able to fit 4 into one box

    } else {  // can use a single box

            let box_size = BOX_SIZES.find(size => size.rolls === sum);

            box_size = box_size ? box_size.size : 'NA';

            containers.push([...paper, {box: box_size}]);
    }}

    paper = null;

    return containers;
}